"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { navLinks, site } from "@/data/site";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <div className="pointer-events-none fixed top-0 right-0 left-0 z-50 flex justify-center">
      <div
        className={`pointer-events-auto relative mx-4 mt-5 w-full max-w-4xl bg-background/80 shadow-[0_4px_24px_rgba(0,0,0,0.25)] backdrop-blur-md transition-[border-radius] duration-200 ease-out md:bg-background/40 ${
          open ? "rounded-2xl" : "rounded-full"
        }`}
      >
        <div
          className={`pointer-events-none absolute inset-0 border border-primary/15 transition-[border-radius] duration-200 ease-out ${
            open ? "rounded-2xl" : "rounded-full"
          }`}
        />

        <div className="relative z-10 flex h-12 items-center justify-between px-5 md:px-6">
          <Link
            href="/"
            className="flex shrink-0 items-center gap-2 text-foreground transition-all duration-200 hover:-translate-y-0.5 hover:text-primary active:scale-95"
          >
            <span className="flex size-7 items-center justify-center rounded-md bg-primary text-[11px] font-bold text-primary-foreground transition-transform duration-200 hover:scale-[1.08] hover:rotate-[5deg] md:size-8 md:text-xs">
              {site.initials}
            </span>
            <span className="text-lg font-bold">{site.shortName}</span>
          </Link>

          <nav className="hidden items-center gap-0.5 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative flex min-w-[48px] items-center justify-center px-3 py-1.5 text-[13px] font-medium transition-all duration-200 hover:-translate-y-0.5 active:scale-95 ${
                  isActive(link.href)
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label}
                {isActive(link.href) && (
                  <span className="absolute -bottom-1 left-1/2 h-1 w-3 -translate-x-1/2 rounded-full bg-primary shadow-[0_0_8px_hsl(160_84%_39%/0.6)]" />
                )}
              </Link>
            ))}
          </nav>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="flex size-12 items-center justify-center text-muted-foreground transition-colors hover:text-foreground md:hidden"
          >
            <span className="relative block size-4">
              <Menu
                className={`absolute inset-0 m-auto size-4 transition-opacity duration-150 ${open ? "opacity-0" : "opacity-100"}`}
              />
              <X
                className={`absolute inset-0 m-auto size-4 transition-opacity duration-150 ${open ? "opacity-100" : "opacity-0"}`}
              />
            </span>
          </button>
        </div>

        <div
          className={`relative z-10 overflow-hidden border-border/20 transition-[max-height] duration-300 ease-out md:hidden ${
            open ? "max-h-64 border-t" : "max-h-0"
          }`}
        >
          <div className="flex flex-col gap-0.5 px-5 py-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`flex min-h-[44px] items-center rounded-lg px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                  isActive(link.href)
                    ? "bg-primary/5 text-primary"
                    : "text-muted-foreground hover:bg-secondary/20 hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
