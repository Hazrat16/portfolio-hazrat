---
title: "How to Set Up Axios with Token Refresh, Interceptors, and Global Error Handling in React"
subtitle: "Production-ready API client with auth and refresh"
description: "Configure Axios in React with interceptors, access and refresh tokens, automatic token refresh, and global error handling — centralized and maintainable."
date: "2025-02-20"
readTime: "12 min read"
topics: ["React", "Axios", "Authentication", "TypeScript"]
---

Most React codebases start with `axios.get()` scattered across components, then
grow a copy-pasted `Authorization` header, then a try/catch in every hook. The
moment access tokens expire, that structure collapses — you need one place that
knows how to retry a request after refreshing.

This is the client I use: one instance, two interceptors, and a single in-flight
refresh shared by every queued request.

## Where to keep tokens

Before any code, the storage decision, because it constrains everything else.

- **Refresh token in an httpOnly, Secure, SameSite cookie.** JavaScript can't
  read it, so an XSS bug can't exfiltrate long-lived credentials.
- **Access token in memory.** A module variable, not `localStorage`. It dies on
  reload, and the refresh cookie silently restores the session on boot.

`localStorage` for either token means any injected script can read them. If you
have a hard constraint that forces it, keep access token lifetimes very short
and accept the risk knowingly.

```ts
// src/lib/token-store.ts
let accessToken: string | null = null;

export const tokenStore = {
  get: () => accessToken,
  set: (token: string | null) => {
    accessToken = token;
  },
};
```

## The base instance

```ts
// src/lib/api-client.ts
import axios from "axios";

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 15_000,
  // Required for the refresh cookie to be sent cross-origin.
  withCredentials: true,
  headers: { "Content-Type": "application/json" },
});
```

A `timeout` is not optional. Without it a hung request leaves a spinner on
screen forever, and the user's only recovery is a reload.

## Request interceptor: attach the token

```ts
api.interceptors.request.use((config) => {
  const token = tokenStore.get();

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});
```

Reading the token per request instead of setting a default header at login means
a refresh mid-session takes effect immediately, with no re-initialization.

## Response interceptor: refresh once, replay many

This is where implementations usually go wrong. If five requests fail with 401
at the same moment, a naive interceptor fires five refresh calls. With rotating
refresh tokens, the first one succeeds and invalidates the token the other four
are using — so four of them fail and the user gets logged out.

The fix is a single shared promise:

```ts
// src/lib/api-client.ts
import axios, { AxiosError, type InternalAxiosRequestConfig } from "axios";

type RetriableConfig = InternalAxiosRequestConfig & { _retry?: boolean };

let refreshPromise: Promise<string> | null = null;

async function refreshAccessToken(): Promise<string> {
  // A bare axios call, not `api` — otherwise a failing refresh recurses.
  const { data } = await axios.post<{ accessToken: string }>(
    `${import.meta.env.VITE_API_URL}/auth/refresh`,
    null,
    { withCredentials: true },
  );

  tokenStore.set(data.accessToken);
  return data.accessToken;
}

api.interceptors.response.use(
  (response) => response,
  async (error: AxiosError) => {
    const config = error.config as RetriableConfig | undefined;

    const isAuthError = error.response?.status === 401;
    const isRefreshCall = config?.url?.includes("/auth/refresh");

    if (!config || !isAuthError || isRefreshCall || config._retry) {
      return Promise.reject(error);
    }

    config._retry = true;

    try {
      // Every concurrent 401 awaits the same refresh.
      refreshPromise ??= refreshAccessToken();
      const token = await refreshPromise;

      config.headers.Authorization = `Bearer ${token}`;
      return api(config);
    } catch (refreshError) {
      tokenStore.set(null);
      onSessionExpired();
      return Promise.reject(refreshError);
    } finally {
      refreshPromise = null;
    }
  },
);
```

Three guards carry the weight here:

1. `config._retry` ensures a request is retried at most once. Without it, a
   backend that returns 401 even with a fresh token produces an infinite loop.
2. Skipping the refresh endpoint itself prevents recursion when the refresh
   token is genuinely expired.
3. `refreshPromise ??= ...` collapses the stampede — the second through fifth
   callers await the promise the first one created.

## Handling session expiry once

The interceptor shouldn't know about React Router or your state library. Give it
a callback to invoke instead:

```ts
// src/lib/session.ts
type Handler = () => void;

let handler: Handler = () => {};

export function setSessionExpiredHandler(fn: Handler) {
  handler = fn;
}

export function onSessionExpired() {
  handler();
}
```

Register it once at the app root:

```tsx
// src/app.tsx
useEffect(() => {
  setSessionExpiredHandler(() => {
    queryClient.clear();
    navigate("/login", { replace: true, state: { from: location.pathname } });
  });
}, [navigate, location.pathname, queryClient]);
```

Storing `from` is a small touch that matters: after re-login the user lands back
where they were rather than on a dashboard.

## Normalizing errors

Components shouldn't inspect `error.response?.data?.errors?.[0]?.message`.
Convert every failure into one predictable shape:

```ts
// src/lib/api-error.ts
import { AxiosError } from "axios";

export type ApiError = {
  status: number | null;
  message: string;
  fields?: Record<string, string>;
};

export function toApiError(error: unknown): ApiError {
  if (error instanceof AxiosError) {
    if (error.code === "ECONNABORTED") {
      return { status: null, message: "The request timed out. Try again." };
    }

    if (!error.response) {
      return { status: null, message: "Network error. Check your connection." };
    }

    const { status, data } = error.response;

    return {
      status,
      message:
        (data as { message?: string })?.message ??
        defaultMessageFor(status),
      fields: (data as { fields?: Record<string, string> })?.fields,
    };
  }

  return { status: null, message: "Something went wrong." };
}

function defaultMessageFor(status: number): string {
  if (status === 403) return "You don't have permission to do that.";
  if (status === 404) return "We couldn't find what you were looking for.";
  if (status === 422) return "Please check the highlighted fields.";
  if (status >= 500) return "Server error. We're looking into it.";
  return "Request failed.";
}
```

Distinguishing "no response" from "error response" is what makes offline states
work. `error.response` being undefined means the request never reached the
server — retrying is reasonable. A 422 means the server rejected the payload —
retrying is pointless.

## Wiring it into TanStack Query

With normalization in place, the query layer gets simple. Don't retry client
errors, and surface server errors through one toast:

```ts
// src/lib/query-client.ts
import { QueryCache, QueryClient } from "@tanstack/react-query";
import { toApiError } from "./api-error";
import { toast } from "sonner";

export const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: (error) => {
      const apiError = toApiError(error);
      // 401 is already handled by the interceptor's redirect.
      if (apiError.status !== 401) toast.error(apiError.message);
    },
  }),
  defaultOptions: {
    queries: {
      staleTime: 30_000,
      retry: (failureCount, error) => {
        const status = toApiError(error).status;
        if (status !== null && status < 500) return false;
        return failureCount < 2;
      },
    },
  },
});
```

Retrying a 404 twice just makes the failure slower. Retrying a 503 twice often
turns a visible error into no error at all.

## Typed request helpers

A thin wrapper keeps `unknown` errors from leaking into components:

```ts
// src/lib/request.ts
import { api } from "./api-client";
import { toApiError, type ApiError } from "./api-error";

export async function request<T>(
  config: Parameters<typeof api.request>[0],
): Promise<T> {
  try {
    const { data } = await api.request<T>(config);
    return data;
  } catch (error) {
    throw toApiError(error) satisfies ApiError;
  }
}
```

Usage stays readable, and the error type is known at the call site:

```ts
export const getProject = (id: string) =>
  request<Project>({ url: `/projects/${id}` });

export const updateProject = (id: string, input: ProjectInput) =>
  request<Project>({ url: `/projects/${id}`, method: "PATCH", data: input });
```

## Testing the refresh path

The concurrency bug this design prevents is invisible until it isn't, so test it
explicitly. With MSW, make the first `/auth/refresh` call slow and fire several
requests at once:

```ts
it("refreshes once for concurrent 401s", async () => {
  let refreshCount = 0;

  server.use(
    http.post("*/auth/refresh", async () => {
      refreshCount += 1;
      await delay(50);
      return HttpResponse.json({ accessToken: "new-token" });
    }),
  );

  await Promise.all([getProject("1"), getProject("2"), getProject("3")]);

  expect(refreshCount).toBe(1);
});
```

If that assertion is `3`, the shared promise isn't shared — usually because it's
being created inside a function scope rather than at module level.

## Checklist

- Access token in memory, refresh token in an httpOnly cookie.
- `withCredentials: true` and an explicit `timeout`.
- Refresh calls made with bare `axios`, never the intercepted instance.
- A `_retry` flag so no request is retried twice.
- One shared refresh promise for concurrent failures.
- Errors normalized once, at the boundary.

That's the whole surface. Every component after this point just calls a typed
function and handles one error shape.
