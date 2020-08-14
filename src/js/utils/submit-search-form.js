import { toggleStatus } from './toggle-status.js';
import { sendRequest } from './send-request.js';
import { dataStorage, newsCardList, searchInput } from '../../pages/main/index.js';

// Функция очищает локальное хранилище и убирает предыдущие карточки, после чего отправляет запрос к серверу, сохраняя данные о запросе.
// После ответа сервера отрисовывает первые 3 карточки.

export function submitSearchForm(request) {

  toggleStatus('search-results__container', 'on');
  toggleStatus('search-results__preloader', 'on');
  toggleStatus('search-results__empty', 'off');
  toggleStatus('search-results__card-container', 'off');
  toggleStatus('search-results__error', 'off');

  dataStorage.clear();
  newsCardList.clear();
  searchInput.setSubmitButtonState(false);

  sendRequest(request)
    .then((res) => {
      toggleStatus('search-results__preloader', 'off');
      searchInput.setSubmitButtonState(true);
      if (res.articles.length != 0) {
        dataStorage.put('request', JSON.stringify(res));
        dataStorage.put('requestName', request);
        newsCardList.renderThree(JSON.parse(dataStorage.get('request')).articles);

        toggleStatus('search-results__card-container', 'on');
      } else {
        toggleStatus('search-results__empty', 'on');
      }
    })
    .catch(() => {
      toggleStatus('search-results__preloader', 'off');
      toggleStatus('search-results__error', 'on');
    });
}

