export class GithubApi {
  constructor() {}
  async getCommits() {
    try {
      this._url = `https://api.github.com/repos/quis0/news-analyzer/commits`;
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
