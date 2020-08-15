import { transformDate } from '../utils/transofrm-date.js';
import { filterText } from '../utils/filter-text.js';
import { sanitizeHTML} from '../utils/sanitize-html.js';

export class NewsCard {
  constructor() {}
  create(data) {
    const markup = `
      <li class="search-results__card">
        <a class="search-results__card-link" target="_blank" href="${sanitizeHTML(data.url)}"></a>
        <img src="${sanitizeHTML(data.urlToImage)}" alt="" class="search-results__card-image">
        <p class="search-results__card-date">${sanitizeHTML(transformDate(data.publishedAt))}</p>
        <h3 class="search-results__card-title">${sanitizeHTML(data.title)}</h3>
        <p class="search-results__card-text">${sanitizeHTML(filterText(data.description))}</p>
        <p class="search-results__author">${sanitizeHTML(data.source.name)}</p>
      </li>
    `
    const element = document.createElement('div');
    element.insertAdjacentHTML('afterbegin', markup);

    return element.firstElementChild;
  }
}
