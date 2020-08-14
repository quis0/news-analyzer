export class CommitCardList {
  constructor(root, createCard, githubApi) {
    this._root = root;
    this._createCard = createCard;
  }

  addCard(data) {
    this._root.appendChild(this._createCard(data));
  }

  render(data) {
    const length = data.length > 10 ? 10 : data.length;
    for (let i = 0; i < length; i++) {
      this.addCard(data[i]);
    }
  }

}
