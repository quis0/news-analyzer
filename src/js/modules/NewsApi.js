export class NewsApi {
  constructor(config) {
    this._apiKey = config.newsApiKey;
    this._startingDate = config.startingDate;
    this._finishDate = config.finishDate;
  }
  async getNews(request) {
    try {
      this._request = request;
<<<<<<< HEAD
      this._url = `https://nomoreparties.co/news/v2/everything?q=${this._request}&pageSize=100&from=${this._startingDate}&to=${this._finishDate}&sortBy=publishedAt&apiKey=${this._apiKey}`;
=======
      this._url = `https://praktikum.tk/news/v2/everything?q=${this._request}&pageSize=100&from=${this._startingDate}&to=${this._finishDate}&sortBy=publishedAt&apiKey=${this._apiKey}`;
>>>>>>> e20aa00572772e7d7658eb97741207d77de3180c
      const response = await fetch(this._url);

      if (response.ok) {
        return await response.json();
      } else {
        return Promise.reject(response.status);
      }
    } catch (err) {
      return Promise.reject(err);
    }
  }

  async getNewsByTitle(request) {
    try {
      this._request = request;
<<<<<<< HEAD
      this._url = `https://nomoreparties.co/news/v2/everything?qInTitle=${this._request}&pageSize=100&from=${this._startingDate}&to=${this._finishDate}&apiKey=${this._apiKey}`;
=======
      this._url = `https://praktikum.tk/news/v2/everything?qInTitle=${this._request}&pageSize=100&from=${this._startingDate}&to=${this._finishDate}&apiKey=${this._apiKey}`;
>>>>>>> e20aa00572772e7d7658eb97741207d77de3180c
      const response = await fetch(this._url);

      if (response.ok) {
        return await response.json();
      } else {
        return Promise.reject(response.status);
      }
    } catch (err) {
      return Promise.reject(err);
    }
  }

  async getNewsByTitleAndDay(request, day) {
    try {
      this._request = request;
<<<<<<< HEAD
      this._url = `https://nomoreparties.co/news/v2/everything?qInTitle=${this._request}&pageSize=100&from=${day}&to=${day}&apiKey=${this._apiKey}`;
=======
      this._url = `https://praktikum.tk/news/v2/everything?qInTitle=${this._request}&pageSize=100&from=${day}&to=${day}&apiKey=${this._apiKey}`;
>>>>>>> e20aa00572772e7d7658eb97741207d77de3180c
      const response = await fetch(this._url);

      if (response.ok) {
        return await response.json();
      } else {
        return Promise.reject(response.status);
      }
    } catch (err) {
      return Promise.reject(err);
    }
  }
}
