export function filterText(text) {
  const regexp = /<.+>/g
  //проверка на случай, когда нет описания новости
  return text ? text.replace(regexp, '') : '';
}
