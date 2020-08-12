// Функция обрабатывает дату, изменяя ее формат на формат вида: 9 июля, 1990

export function transformDate(date) {
  const regexp = /\d{4}-\d{2}-\d{2}/g;
  const array = date.match(regexp).join().split('-');
  const newDate = new Date(array[0], array[1] - 1, array[2]);
  const options = { day: 'numeric', month: 'long', year: 'numeric' };
  const result = new Intl.DateTimeFormat('ru', options).format(newDate).toString().slice(0, -3);
  const indexOfSpace = result.lastIndexOf(' ');

  return result.slice(0, indexOfSpace) + ',' + result.slice(indexOfSpace);
}
