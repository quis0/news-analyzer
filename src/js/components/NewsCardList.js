export class NewsCardList {
  constructor(root, createCard) {
    this._root = root;
    this._createCard = createCard;
    this.iterator = 0;
    this._setHandlers();
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

  renderThree(articles) {
    this._setButtonState(true);
    this._articles = articles;
    for (let i = 0; i < 3; i++) {
      if (articles[this.iterator]) {

        this.addCard(articles[this.iterator]);
        this.iterator++;
      } else {
        this._setButtonState(false);
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

  _setHandlers() {
    document.querySelector('.search-results__render-button').addEventListener('click', () => this.renderThree(this._articles))
  }

}
