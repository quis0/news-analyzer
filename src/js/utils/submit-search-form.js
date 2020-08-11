import { toggleStatus } from './toggle-status.js';
import { sendRequest } from './send-request.js';
import { dataStorage, newsCardList } from '../../pages/main/index.js';


export function submitSearchForm(request) {

  toggleStatus('search-results__container', 'on');
  toggleStatus('search-results__preloader', 'on');
  toggleStatus('search-results__empty', 'off');
  toggleStatus('search-results__card-container', 'off');

  dataStorage.clear();
  newsCardList.clear();

  sendRequest(request)
    .then((res) => {
      toggleStatus('search-results__preloader', 'off');
      if (res.articles.length != 0) {
        dataStorage.put('request', JSON.stringify(res));
        dataStorage.put('requestName', request);
        newsCardList.renderThree(JSON.parse(dataStorage.get('request')).articles);

        toggleStatus('search-results__card-container', 'on');
      } else {
        toggleStatus('search-results__empty', 'on');
      }
    })
    .catch(err => console.log(err));



}

