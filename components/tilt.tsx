"use client";

import { useRef, type ReactNode } from "react";

export function Tilt({
  children,
  className = "",
  max = 7,
}: {
  children: ReactNode;
  className?: string;
  max?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={ref}
      className={`min-w-0 will-change-transform ${className}`}
      onMouseMove={(event) => {
        const el = ref.current;
        if (!el) return;
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
        if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
        const box = el.getBoundingClientRect();
        const x = (event.clientX - box.left) / box.width;
        const y = (event.clientY - box.top) / box.height;
        el.style.transform = `perspective(1100px) rotateX(${(0.5 - y) * max}deg) rotateY(${(x - 0.5) * max}deg)`;
      }}
      onMouseLeave={() => {
        const el = ref.current;
        if (!el) return;
        el.style.transform = "perspective(1100px) rotateX(0deg) rotateY(0deg)";
      }}
      style={{ transformStyle: "preserve-3d", transition: "transform 180ms ease-out" }}
    >
      {children}
    </div>
  );
}
