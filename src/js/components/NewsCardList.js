export class NewsCardList {
  constructor(root, createCard) {
    this._root = root;
    this._createCard = createCard;
  }

  addCard(data) {
    this._root.appendChild(this._createCard(data));
  }

  clear() {
    while (this._root.firstChild) {
      this._root.removeChild(this._root.firstChild);
    }
  }

}
