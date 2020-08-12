import { toggleStatus } from '../utils/toggle-status.js'

export class NewsCardList {
  constructor(root, createCard, dataStorage) {
    this._root = root;
    this._createCard = createCard;
    this.iterator = 0;
    this.dataStorage = dataStorage;
    this.setHandlers();
  }

  _setButtonState(state) {
    const button = document.querySelector('.search-results__render-button');

    if (state) {
      button.classList.add('search-results__render-button_status_active');
      button.classList.remove('search-results__render-button_status_inactive');
    } else {
      button.classList.add('search-results__render-button_status_inactive');
      button.classList.remove('search-results__render-button_status_active');
    }
  }

  render() {
    this._setButtonState(this.dataStorage.get('buttonState'));
    try {
      this._articles = JSON.parse(this.dataStorage.get('request')).articles;
      if (this._articles.length) {
        toggleStatus('search-results__container', 'on');
        toggleStatus('search-results__card-container', 'on');
        for (let i = 0; i < this.dataStorage.get('totalCards'); i++) {
          this.addCard(this._articles[i]);
          this.iterator = i;
        }
      }
    } catch {
      return;
    }

  }

  renderThree(articles) {
    this._setButtonState(true);
    this._articles = articles;

    for (let i = 0; i < 3; i++) {
      if (articles[this.iterator]) {
        this.addCard(articles[this.iterator]);
        this.iterator++;
        this.dataStorage.put('totalCards', this.iterator)
        this.dataStorage.put('buttonState', 'true');
      } else {
        this._articles.length = 0;
        this._setButtonState(false);
        this.dataStorage.put('buttonState', '');
        return;
      }
    }
  }

  addCard(data) {
    this._root.appendChild(this._createCard(data));
  }

  clear() {
    while (this._root.firstChild) {
      this._root.removeChild(this._root.firstChild);
    }
    this.iterator = 0;
  }

  setHandlers() {
    document.querySelector('.search-results__render-button').addEventListener('click', () => this.renderThree(this._articles))
  }

}
