export class DataStorage {
  constructor() {

  }
  // to get this dude back we need : JSON.parse(localStorage.getItem('request'));

  put(key, value) {
    localStorage.setItem(key, value);
  }

  clear() {
    localStorage.clear();
  }
}
