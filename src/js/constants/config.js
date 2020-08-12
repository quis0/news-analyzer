import { calculateDate } from '../utils/calculate-date.js';
import { STARTING_DATE_NUMBER_DAYS } from './starting-date-number-days.js';
import { FINISH_DATE_NUMBER_DAYS } from './finish-date-number-days.js'

export const config = {
  newsApiKey: '140dba3e33f442de98a506b4b3ce4566',
  startingDate: calculateDate(STARTING_DATE_NUMBER_DAYS),
  finishDate: calculateDate(FINISH_DATE_NUMBER_DAYS)
};
