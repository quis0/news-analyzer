import './index.css';

import { Statistics } from '../../js/components/Statistics.js';
import { DataStorage } from '../../js/modules/DataStorage.js';
import { config } from '../../js/constants/config.js';
import { NewsApi } from '../../js/modules/NewsApi.js';
import { putDates } from '../../js/utils/put-dates.js'

export const dataStorage = new DataStorage();
export const newsApi = new NewsApi(config);
const statistics = new Statistics(dataStorage);

putDates(dataStorage);
statistics.render();
