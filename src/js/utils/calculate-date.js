export function calculateDate() {
  const weekInMilliseconds = 6 * 24 * 60 * 60 * 1000;
  const date = new Date().getTime() - weekInMilliseconds;

  return new Date(date).toISOString().slice(0, 10);
}
