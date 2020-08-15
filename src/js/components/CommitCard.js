import { transformDate } from '../utils/transofrm-date.js';
import { sanitizeHTML } from '../utils/sanitize-html.js';

export class CommitCard {
  constructor() { }
  create(data) {
    const markup = `
    <li class="carousel-cell">
      <p class="commits__card-date">${sanitizeHTML(transformDate(data.commit.committer.date))}</p>
      <div class="commits__author-container">
        <img src="${sanitizeHTML(data.author.avatar_url)}" alt="Фотография автора коммита" class="commits__author-image">
        <p class="commits__author-name">${sanitizeHTML(data.commit.committer.name)}</p>
        <p class="commits__author-email">${sanitizeHTML(data.commit.committer.email)}</p>
      </div>
      <p class="commits__text">${sanitizeHTML(data.commit.message)}</p>
    </li>
    `
    const element = document.createElement('div');
    element.insertAdjacentHTML('afterbegin', markup);

    return element.firstElementChild;
  }
}
