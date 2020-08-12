// Функция добавляет/убирает класс (статус состояния) элементам

export function toggleStatus(className, status) {
  const elem = document.querySelector(`.${className}`);
  if (status === 'off') {
    elem.classList.remove(`${className}_status_active`)
    elem.classList.add(`${className}_status_inactive`)
  } else if (status === 'on') {
    elem.classList.add(`${className}_status_active`)
    elem.classList.remove(`${className}_status_inactive`)
  }
}
