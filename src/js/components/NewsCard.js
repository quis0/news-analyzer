import { transformDate } from '../utils/transofrm-date.js';
import { fliterText } from '../utils/filter-text.js';

export class NewsCard {
  constructor() {

  }
  create(data) {
    const markup = `
      <li class="search-results__card">
        <a class="search-results__card-link" target="_blank" href="${data.url}">
          <img src="${data.urlToImage}" alt="" class="search-results__card-image">
          <p class="search-results__card-date">${transformDate(data.publishedAt)}</p>
          <h3 class="search-results__card-title">${data.title}</h3>
          <p class="search-results__card-text">${fliterText(data.description)}</p>
          <p class="search-results__author">${data.source.name}</p>
        </a>
      </li>
    `
    const element = document.createElement('div');
    element.insertAdjacentHTML('afterbegin', markup);

    return element.firstElementChild;
  }
}
