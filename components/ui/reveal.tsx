"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Fraction of the element that must be visible before animating in. */
  threshold?: number;
};

/** Adds `in-view` once the block scrolls into the viewport, which drives the
 *  `[data-reveal]` transitions declared in globals.css. */
export function Reveal({ children, className, threshold = 0.15 }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin: "0px 0px -60px 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold]);

  return (
    <div ref={ref} className={`${inView ? "in-view" : ""} ${className ?? ""}`}>
      {children}
    </div>
  );
}
