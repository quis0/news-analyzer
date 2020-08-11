export function putDates(dataStorage) {
  const days = [];
  const months = [];
  let options = { weekday: 'short', day: 'numeric' };

  for (let i = 7; i > 0; i--) {
    const dateInMilliseconds = i * 24 * 60 * 60 * 1000;
    const date = new Date().getTime() - dateInMilliseconds;
    const result = new Intl.DateTimeFormat('ru', options).format(date);
    days.push(result.match(/\d+/gi) + ', ' + result.match(/[а-я]+/gi));
  }

  options = { month: 'long' };
  const weekInMilliseconds = 7 * 24 * 60 * 60 * 1000;
  const dayInMilliseconds = 1 * 24 * 60 * 60 * 1000;
  const firstMonth = new Intl.DateTimeFormat('ru', options).format(new Date() - weekInMilliseconds);
  const secondMonth = new Intl.DateTimeFormat('ru', options).format(new Date() - dayInMilliseconds);
  months.push(firstMonth);
  if (firstMonth != secondMonth) months.push(secondMonth);

  dataStorage.put('days', JSON.stringify(days));
  dataStorage.put('months', JSON.stringify(months))
}

