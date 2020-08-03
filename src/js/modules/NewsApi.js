export class NewsApi {
  constructor(config) {
    this._request = config.request;
    this._apiKey = config.newsApiKey;
    this._date = config.date;
    this._url = `http://newsapi.org/v2/everything?q=${this._request}&from=${this._date}&apiKey=${this._apiKey}`;
  }
  async getNews() {
    try {
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
