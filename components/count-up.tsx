"use client";

import { useEffect, useRef, useState } from "react";

export function CountUp({
  value,
  className = "",
}: {
  value: string;
  className?: string;
}) {
  const numeric = Number(value);
  const isNumber = Number.isFinite(numeric);
  const [shown, setShown] = useState(isNumber ? "0" : value);
  const ref = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || !isNumber) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setShown(value);
      return;
    }

    let frame = 0;
    const play = () => {
      const start = performance.now();
      const duration = 900;
      const tick = (now: number) => {
        const t = Math.min(1, (now - start) / duration);
        const eased = 1 - (1 - t) ** 3;
        setShown(String(Math.round(numeric * eased)));
        if (t < 1) frame = requestAnimationFrame(tick);
      };
      frame = requestAnimationFrame(tick);
    };

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        play();
        io.unobserve(el);
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => {
      cancelAnimationFrame(frame);
      io.disconnect();
    };
  }, [isNumber, numeric, value]);

  return (
    <p ref={ref} className={className}>
      {shown}
    </p>
  );
}
