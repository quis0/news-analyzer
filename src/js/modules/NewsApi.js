export class NewsApi {
  constructor(config) {
    this._apiKey = config.newsApiKey;
    this._date = config.date;
  }
  async getNews(request) {
    try {
      this._request = request;
      this._url = `http://newsapi.org/v2/everything?q=${this._request}&from=${this._date}&apiKey=${this._apiKey}`;
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
