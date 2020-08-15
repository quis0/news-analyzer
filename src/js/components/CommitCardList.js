export class CommitCardList {
  constructor(root, createCard, githubApi) {
    this._root = root;
    this._createCard = createCard;
  }

  addCard(data) {
    this._root.appendChild(this._createCard(data));
  }

  render(data) {
    const maxNumberOfCards = 10;
    const length = data.length > maxNumberOfCards ? maxNumberOfCards : data.length;
    for (let i = 0; i < length; i++) {
      this.addCard(data[i]);
    }
  }

}
