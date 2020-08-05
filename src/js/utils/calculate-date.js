export function calculateDate() {
  // 7 -- кол-во дней, которое необходимо учесть, 24 -- кол-во часов в сутках,
  // 60 -- кол-во минут в одном часу, 60 -- кол-во секунд в одной минуте, 1000 -- кол-во миллисекунд в секунде
  const weekInMilliseconds = 7 * 24 * 60 * 60 * 1000;
  const date = new Date().getTime() - weekInMilliseconds;

  return new Date(date).toISOString().slice(0, 10);
}
