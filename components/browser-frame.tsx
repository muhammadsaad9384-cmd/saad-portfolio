import type { ReactNode } from "react";

export function BrowserFrame({
  children,
  url,
  className = "",
}: {
  children: ReactNode;
  url?: string;
  className?: string;
}) {
  return (
    <div
      className={`overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-[0_20px_50px_-24px_rgb(15_23_42/0.35)] ${className}`}
    >
      <div className="flex items-center gap-2 border-b border-slate-100 bg-slate-50 px-3 py-2">
        <span className="h-2 w-2 rounded-full bg-[#ff5f57]" />
        <span className="h-2 w-2 rounded-full bg-[#febc2e]" />
        <span className="h-2 w-2 rounded-full bg-[#28c840]" />
        {url ? (
          <span className="ml-2 min-w-0 flex-1 truncate rounded-md bg-white px-2 py-0.5 font-mono text-[10px] text-slate-400">
            {url}
          </span>
        ) : null}
      </div>
      {children}
    </div>
  );
}
