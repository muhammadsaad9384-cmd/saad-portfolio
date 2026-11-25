"use client";

import { useEffect } from "react";

export function Atmosphere() {
  useEffect(() => {
    const root = document.documentElement;
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");

    function onMove(event: PointerEvent) {
      if (!fine.matches || reduce.matches) return;
      root.style.setProperty("--spot-x", `${event.clientX}px`);
      root.style.setProperty("--spot-y", `${event.clientY}px`);
    }

    function onScroll() {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const value = max > 0 ? window.scrollY / max : 0;
      root.style.setProperty("--scroll", `${Math.min(1, Math.max(0, value))}`);
    }

    onScroll();
    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <>
      <div className="scroll-progress" aria-hidden="true" />
      <div className="spot" aria-hidden="true" />
      <div className="orb orb-a" aria-hidden="true" />
      <div className="orb orb-b" aria-hidden="true" />
    </>
  );
}
