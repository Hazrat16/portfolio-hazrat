---
title: "for...of vs for...in in JavaScript"
subtitle: "When to use each loop"
description: "The difference between for...of and for...in in JavaScript: iterables vs plain objects, values vs keys, and when to use Object.entries()."
date: "2025-02-15"
readTime: "3 min read"
topics: ["JavaScript", "for...of", "for...in"]
---

They differ by one word and do genuinely different things. `for...of` walks the
**values** of an iterable. `for...in` walks the **enumerable string keys** of an
object, including inherited ones.

## for...of: iterables

Arrays, strings, `Map`, `Set`, `NodeList`, and generators are iterable:

```js
for (const value of ["a", "b", "c"]) {
  console.log(value); // "a", "b", "c"
}

for (const char of "hi") {
  console.log(char); // "h", "i"
}
```

Need the index too? Destructure `entries()`:

```js
for (const [index, value] of ["a", "b"].entries()) {
  console.log(index, value); // 0 "a" — 1 "b"
}
```

## for...in: object keys

```js
const user = { name: "Ada", role: "engineer" };

for (const key in user) {
  console.log(key, user[key]); // "name" "Ada" — "role" "engineer"
}
```

## Why for...in on arrays is a trap

```js
const items = ["a", "b"];
items.extra = "oops";

for (const key in items) {
  console.log(key); // "0", "1", "extra"
}
```

Three problems in one example: the keys are **strings** (`"0"`, not `0`), any
non-index property is included, and order isn't guaranteed for non-integer keys.

## Inherited properties leak in

`for...in` walks the prototype chain:

```js
const base = { shared: true };
const child = Object.create(base);
child.own = 1;

for (const key in child) {
  console.log(key); // "own", "shared"
}
```

Guard with `Object.hasOwn`, or skip the whole class of bug by using
`Object.keys()`, which only returns own properties:

```js
for (const key of Object.keys(child)) {
  console.log(key); // "own"
}
```

## The one you actually want

`Object.entries()` with `for...of` gives you keys and values, own properties
only, in a form that destructures cleanly:

```js
for (const [key, value] of Object.entries(user)) {
  console.log(`${key}: ${value}`);
}
```

## Quick reference

| Goal | Use |
| --- | --- |
| Array or string values | `for...of` |
| Value and index | `for...of` over `.entries()` |
| Object keys | `for...of` over `Object.keys()` |
| Object keys and values | `for...of` over `Object.entries()` |
| `Map` / `Set` contents | `for...of` |
| Enumerate inherited keys | `for...in` (rare, deliberate) |

## One more thing: async

`for...of` supports `await` inside the body and pauses between iterations.
Array methods like `forEach` don't:

```js
// Sequential, as written.
for (const id of ids) {
  await deleteItem(id);
}

// Fires everything at once and doesn't wait.
ids.forEach(async (id) => await deleteItem(id));
```

If you want concurrency, that's `Promise.all(ids.map(deleteItem))` — but say so
explicitly rather than getting it by accident.

**Rule of thumb:** reach for `for...of`. If you're typing `for...in`, you almost
certainly want `Object.keys()` or `Object.entries()` instead.
