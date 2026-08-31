/** NetAPI Studio formatters. */
export function formatLatency(ms) { return `${Number(ms)||0} ms`; }
export function formatStatus(s) {
  const map = { Active:"success", Published:"success", Disabled:"danger", Revoked:"danger", Draft:"warning", Paused:"warning" };
  return map[s] || "default";
}
export function truncate(s, max=48) {
  const t = String(s||"");
  return t.length <= max ? t : t.slice(0, max-1) + "…";
}
