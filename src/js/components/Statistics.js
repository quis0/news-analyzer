import { newsApi } from '../../pages/analytics/index.js';

export class Statistics {
  constructor(dataStorage) {
    this._dataStorage = dataStorage;
  }

  render() {
    const requestName = this._dataStorage.get('requestName');
    const tableDates = document.querySelectorAll('.table__date');
    const days = JSON.parse(this._dataStorage.get('days'));

    document.getElementById('request').textContent = requestName;
    document.getElementById('total-results').textContent = JSON.parse(this._dataStorage.get('request')).totalResults;
    newsApi.getNewsByTitle(requestName)
      .then(res => {
        this._dataStorage.put('totalResultsInHeadings', res.totalResults)
        document.getElementById('total-results-headings').textContent = res.totalResults;
      })
      .catch(err => console.log(err));

    document.getElementById('months').textContent = `(${JSON.parse(this._dataStorage.get('months')).join(', ')})`;

    tableDates.forEach((date, index) => date.textContent = days[index]);
  }
}
