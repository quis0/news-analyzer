import { newsApi } from '../../pages/analytics/index.js';
import { calculateDate } from '../utils/calculate-date.js';

export class Statistics {
  constructor(dataStorage) {
    this._dataStorage = dataStorage;
  }

  render() {
    const requestName = this._dataStorage.get('requestName');
    const totalResults = JSON.parse(this._dataStorage.get('request')).totalResults;
    let totalResultsInHeadings = null;
    const tableDates = document.querySelectorAll('.table__date');
    const tableNumbers = document.querySelectorAll('.table__fill-text');
    const days = JSON.parse(this._dataStorage.get('days'));
    const promises = [];
    for (let i = 7; i > 0; i--) {
      promises.push(newsApi.getNewsByTitleAndDay(requestName, calculateDate(i)));
    }

    document.getElementById('request').textContent = requestName;
    document.getElementById('total-results').textContent = totalResults;
    newsApi.getNewsByTitle(requestName)
      .then(res => {
        this._dataStorage.put('totalResultsInHeadings', res.totalResults);
        totalResultsInHeadings = res.totalResults;
        document.getElementById('total-results-headings').textContent = totalResultsInHeadings;

        Promise.all([...promises]).then((values) => {
          values.forEach((value, index) => {
            const percent = (value.totalResults / +totalResultsInHeadings * 100).toFixed(2);
            if (percent < 4 || screen.width <= 768) {
              tableNumbers[index].textContent = Math.round(percent);
            } else {
              tableNumbers[index].textContent = percent;
            }
            tableNumbers[index].parentElement.style.width = `${percent}%`;
          });
        })
      })
      .catch(err => console.log(err));

    document.getElementById('months').textContent = `(${JSON.parse(this._dataStorage.get('months')).join(', ')})`;

    tableDates.forEach((date, index) => date.textContent = days[index]);
  }
}
