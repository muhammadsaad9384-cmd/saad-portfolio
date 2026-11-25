"use client";

import { useEffect, useState } from "react";
import type { Screen } from "@/lib/projects";

export function ScreenGallery({ screens }: { screens: Screen[] }) {
  const [active, setActive] = useState<Screen | null>(null);

  useEffect(() => {
    if (!active) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActive(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active]);

  return (
    <>
      <div className="grid gap-6 sm:grid-cols-2">
        {screens.map((screen) => (
          <button
            key={`${screen.path}-${screen.src}`}
            type="button"
            onClick={() => setActive(screen)}
            className="group text-left"
          >
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_16px_40px_-24px_rgb(15_23_42/0.35)]">
              <div className="flex items-center gap-1.5 border-b border-slate-100 bg-slate-50 px-3 py-2">
                <span className="h-2 w-2 rounded-full bg-[#ff5f57]" />
                <span className="h-2 w-2 rounded-full bg-[#febc2e]" />
                <span className="h-2 w-2 rounded-full bg-[#28c840]" />
                <span className="ml-2 truncate rounded-md bg-white px-2 py-0.5 font-mono text-[11px] text-muted">
                  {screen.path}
                </span>
              </div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={screen.src}
                alt={screen.alt}
                className="block h-auto w-full object-contain bg-slate-950"
              />
            </div>
            <p className="mt-3 text-sm font-semibold">{screen.title}</p>
            <p className="text-xs tracking-wide text-muted">{screen.path}</p>
          </button>
        ))}
      </div>

      {active ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={active.title}
          className="fixed inset-0 z-[80] flex items-center justify-center bg-[#141311]/70 p-3 backdrop-blur-sm sm:p-4"
          onClick={() => setActive(null)}
        >
          <div
            className="flex max-h-[92vh] w-full max-w-5xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex shrink-0 items-center justify-between border-b border-line px-5 py-3">
              <div>
                <p className="text-sm font-medium">{active.title}</p>
                <p className="font-mono text-[11px] text-muted">{active.path}</p>
              </div>
              <button
                type="button"
                onClick={() => setActive(null)}
                className="btn btn-ghost"
                style={{ padding: "0.5rem 1rem" }}
              >
                <span className="btn-label">Close</span>
                <span className="btn-arrow" aria-hidden="true">
                  ×
                </span>
              </button>
            </div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={active.src}
              alt={active.alt}
              className="max-h-[80vh] w-full object-contain bg-neutral-100"
            />
          </div>
        </div>
      ) : null}
    </>
  );
}
