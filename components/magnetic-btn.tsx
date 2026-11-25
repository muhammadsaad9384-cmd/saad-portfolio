"use client";

import Link from "next/link";
import { useRef, type MouseEvent, type ReactNode } from "react";

type Variant = "primary" | "ghost" | "light" | "text";

type MagneticBtnProps = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  transitionTypes?: string[];
  className?: string;
  external?: boolean;
  arrow?: boolean;
  magnetic?: boolean;
};

function isPlainAnchor(href: string, external?: boolean) {
  return (
    Boolean(external) ||
    href.startsWith("#") ||
    href.startsWith("mailto:") ||
    href.startsWith("http://") ||
    href.startsWith("https://")
  );
}

function canMagnet() {
  return (
    window.matchMedia("(hover: hover) and (pointer: fine)").matches &&
    !window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

export function MagneticBtn({
  href,
  children,
  variant = "primary",
  transitionTypes,
  className = "",
  external,
  arrow,
  magnetic = true,
}: MagneticBtnProps) {
  const ref = useRef<HTMLAnchorElement>(null);
  const showArrow = arrow ?? variant !== "text";

  function move(event: MouseEvent<HTMLAnchorElement>) {
    const el = ref.current;
    if (!el || !magnetic || !canMagnet()) return;
    const box = el.getBoundingClientRect();
    const x = event.clientX - box.left - box.width / 2;
    const y = event.clientY - box.top - box.height / 2;
    el.style.transition = "transform 80ms linear";
    el.style.transform = `translate3d(${x * 0.32}px, ${y * 0.4}px, 0)`;
    el.style.setProperty(
      "--shine-x",
      `${((event.clientX - box.left) / box.width) * 100}%`,
    );
  }

  function leave() {
    const el = ref.current;
    if (!el) return;
    el.style.transition = "transform 0.45s cubic-bezier(0.16, 1, 0.3, 1)";
    el.style.transform = "";
  }

  const cls = `btn btn-${variant} ${className}`.trim();
  const inner = (
    <>
      <span className="btn-shine" aria-hidden="true" />
      <span className="btn-label">{children}</span>
      {showArrow ? (
        <span className="btn-arrow" aria-hidden="true">
          →
        </span>
      ) : null}
    </>
  );

  if (isPlainAnchor(href, external)) {
    return (
      <a
        ref={ref}
        href={href}
        className={cls}
        onMouseMove={move}
        onMouseLeave={leave}
        {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
      >
        {inner}
      </a>
    );
  }

  return (
    <Link
      ref={ref}
      href={href}
      transitionTypes={transitionTypes}
      className={cls}
      onMouseMove={move}
      onMouseLeave={leave}
    >
      {inner}
    </Link>
  );
}
