import { ViewTransition } from "react";

const motion = {
  "nav-forward": "nav-forward",
  "nav-back": "nav-back",
  default: "fade-up",
} as const;

export function PageTransition({ children }: { children: React.ReactNode }) {
  return (
    <ViewTransition enter={motion} exit={motion} default="none">
      {children}
    </ViewTransition>
  );
}
