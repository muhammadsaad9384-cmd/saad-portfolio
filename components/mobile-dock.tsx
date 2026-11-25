"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navTransitionTypes } from "@/lib/nav";

const items = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  { href: "/chain", label: "Blockchain" },
  { href: "/about", label: "About" },
];

export function MobileDock() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Mobile"
      className="fixed inset-x-3 bottom-[max(0.75rem,env(safe-area-inset-bottom))] z-50 sm:hidden"
    >
      <div className="flex items-center justify-between rounded-2xl border border-white/70 bg-white/90 px-1.5 py-1.5 shadow-[0_18px_40px_-18px_rgb(15_23_42/0.45)] ring-1 ring-slate-900/5 backdrop-blur-xl">
        {items.map((item) => {
          const active =
            item.href === "/"
              ? pathname === "/"
              : pathname === item.href || pathname.startsWith(`${item.href}/`);
          return (
            <Link
              key={item.href}
              href={item.href}
              transitionTypes={navTransitionTypes(pathname, item.href)}
              className={`min-h-10 flex-1 rounded-xl px-2 py-2 text-center text-[12px] font-semibold ${
                active
                  ? "bg-blue-600 text-white shadow-sm"
                  : "text-muted"
              }`}
            >
              {item.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
