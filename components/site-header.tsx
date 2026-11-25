"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MagneticBtn } from "@/components/magnetic-btn";
import { navTransitionTypes } from "@/lib/nav";
import { site } from "@/lib/site";

const links = [
  { href: "/work", label: "Work" },
  { href: "/chain", label: "Blockchain" },
  { href: "/about", label: "About" },
];

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header
      className="sticky top-0 z-40 px-3 pt-3 sm:px-4 sm:pt-4"
      style={{ viewTransitionName: "site-header" }}
    >
      <div className="nav-track">
        <div className="nav-bar">
          <span className="nav-seed" aria-hidden="true" />
          <Link
            href="/"
            transitionTypes={navTransitionTypes(pathname, "/")}
            className="nav-brand flex min-w-0 items-center gap-2.5"
          >
            <span className="grid h-8 w-8 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-blue-500 via-blue-600 to-indigo-600 text-[10px] font-bold tracking-wide text-white shadow-[0_10px_18px_-8px_rgb(37_99_235/0.9)] sm:h-9 sm:w-9 sm:text-[11px]">
              SB
            </span>
            <span className="nav-copy hidden min-w-0 leading-tight sm:block">
              <span className="block truncate text-sm font-semibold tracking-tight">
                {site.name}
              </span>
              <span className="hidden text-[11px] text-muted lg:block">
                {site.title}
              </span>
            </span>
          </Link>

          <nav
            aria-label="Primary"
            className="nav-links hidden items-center justify-self-center rounded-full bg-slate-100/80 p-1 text-[13px] font-medium sm:flex"
          >
            {links.map((link) => {
              const active =
                pathname === link.href || pathname.startsWith(`${link.href}/`);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  transitionTypes={navTransitionTypes(pathname, link.href)}
                  className={`nav-pill ${active ? "is-active" : "text-muted"}`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="nav-cta shrink-0">
            <MagneticBtn
              href="/contact"
              transitionTypes={navTransitionTypes(pathname, "/contact")}
              className="header-cta"
              arrow={false}
              magnetic={false}
            >
              <span className="status-dot" aria-hidden="true" />
              Contact
            </MagneticBtn>
          </div>
        </div>
      </div>
    </header>
  );
}
