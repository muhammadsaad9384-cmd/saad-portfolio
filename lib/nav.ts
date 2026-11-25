export function navTransitionTypes(from: string, to: string): string[] {
  const rank = (path: string) => {
    if (path === "/") return 0;
    if (path.startsWith("/work/")) return 2;
    if (path.startsWith("/work")) return 1;
    if (path.startsWith("/about")) return 1;
    if (path.startsWith("/chain")) return 1;
    if (path.startsWith("/contact")) return 1;
    return 1;
  };

  if (to.startsWith("/work/") && from === "/work") return ["nav-forward"];
  if (from.startsWith("/work/") && (to === "/work" || to === "/")) return ["nav-back"];
  return rank(to) >= rank(from) ? ["nav-forward"] : ["nav-back"];
}
