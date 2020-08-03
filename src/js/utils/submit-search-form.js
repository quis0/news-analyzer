import { toggleStatus } from './toggle-status.js';
import { config } from '../constants/config.js'
import { NewsApi } from '../modules/NewsApi.js'

export function submitSearchForm(request) {
  toggleStatus('search-results__container', 'on');
  toggleStatus('search-results__preloader', 'on');
  toggleStatus('search-results__empty', 'off');
  toggleStatus('search-results__card-container', 'off');
  localStorage.clear();

  //взаимодействие с NewsApi
  config.request = request;
  const newsApi = new NewsApi(config);
  newsApi.getNews()
    .then((res) => {
      toggleStatus('search-results__preloader', 'off');
      if (res.articles.length != 0) {
        localStorage.setItem('request', JSON.stringify(res));
        // to get this dude back we need : JSON.parse(localStorage.getItem('request'));
        toggleStatus('search-results__card-container', 'on');
      } else {
        toggleStatus('search-results__empty', 'on');
      }
    })
    .catch(err => console.log(err));

  //взаимодействие с списком карточек, их отрисовка

  //взаимодействте с localStorage
}
