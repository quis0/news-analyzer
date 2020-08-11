export class DataStorage {
  constructor() {}

  put(key, value) {
    localStorage.setItem(key, value);
  }

  get(key) {
    return localStorage.getItem(key);
  }

  clear() {
    localStorage.clear();
  }
}
