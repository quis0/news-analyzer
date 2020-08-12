export class NewsApi {
  constructor(config) {
    this._apiKey = config.newsApiKey;
    this._startingDate = config.startingDate;
    this._finishDate = config.finishDate;
  }
  async getNews(request) {
    try {
      this._request = request;
      this._url = `http://newsapi.org/v2/everything?q=${this._request}&pageSize=100&from=${this._startingDate}&to=${this._finishDate}&sortBy=publishedAt&apiKey=${this._apiKey}`;
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
      this._url = `http://newsapi.org/v2/everything?qInTitle=${this._request}&pageSize=100&from=${this._startingDate}&to=${this._finishDate}&apiKey=${this._apiKey}`;
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
      this._url = `http://newsapi.org/v2/everything?qInTitle=${this._request}&pageSize=100&from=${day}&to=${day}&apiKey=${this._apiKey}`;
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
