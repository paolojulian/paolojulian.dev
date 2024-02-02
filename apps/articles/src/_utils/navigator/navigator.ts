export function isMacOS() {
  if (typeof navigator === 'undefined' || !navigator) return false;

  const userAgent = navigator.userAgent.toLowerCase();

  const isMacOS = /macintosh|mac os x/i.test(userAgent);
  return isMacOS;
}