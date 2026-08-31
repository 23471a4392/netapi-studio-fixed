/** NetAPI Studio validators. */
export function required(v) { return v != null && String(v).trim().length > 0; }
export function isUrl(v) {
  try { const u = new URL(String(v||"")); return u.protocol === "http:" || u.protocol === "https:"; }
  catch { return false; }
}
export function isPath(v) { return /^\/[A-Za-z0-9_\-./:{}]*$/.test(String(v||"")); }
export function validateApp(p) {
  const e = {};
  if (!required(p.name)) e.name = "Name is required";
  if (p.redirect && !isUrl(p.redirect)) e.redirect = "Invalid redirect URL";
  return e;
}
export function validateApi(p) {
  const e = {};
  if (!required(p.name)) e.name = "Name is required";
  if (!required(p.path) || !isPath(p.path)) e.path = "Path must start with /";
  return e;
}
export function validateWebhook(p) {
  const e = {};
  if (!required(p.name)) e.name = "Name is required";
  if (!isUrl(p.url)) e.url = "Invalid webhook URL";
  return e;
}
