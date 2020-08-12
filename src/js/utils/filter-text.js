// Функция фильтрует текст на наличие в нем тегов

export function filterText(text) {
  const regexp = /<.+>/g
  //проверка на случай, когда нет описания новости
  return text ? text.replace(regexp, '') : '';
}
