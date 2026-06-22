"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";

/**
 * Drives buttery-smooth, eased scrolling across the whole site (replaces the
 * native scrollbar's linear motion with Lenis's interpolated easing) and
 * keeps Framer Motion's scroll-linked animations (useScroll/whileInView in
 * components/reveal.tsx) perfectly in sync by driving the RAF loop here.
 *
 * Respects prefers-reduced-motion: if the user has that set, Lenis is never
 * initialized and the browser's native (instant) scroll is left untouched.
 */
export function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1 - Math.pow(2, -10 * t)), // ease-out expo
      smoothWheel: true,
      touchMultiplier: 1.1,
    });
    lenisRef.current = lenis;

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  return <>{children}</>;
}
