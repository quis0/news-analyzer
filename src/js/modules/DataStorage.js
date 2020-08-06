export class DataStorage {
  constructor() {

  }

  put(key, value, requestName) {
    localStorage.setItem(key, JSON.stringify(value));
    localStorage.setItem('requestName', requestName);
  }

  get(key) {
    return JSON.parse(localStorage.getItem(key));
  }

  clear() {
    localStorage.clear();
  }
}
