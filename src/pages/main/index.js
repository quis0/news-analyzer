import './index.css';
import { SearchInput } from '../../js/components/SearchInput.js';
import { submitSearchForm } from '../../js/utils/submit-search-form.js';
import { DataStorage } from '../../js/modules/DataStorage.js';
import { config } from '../../js/constants/config.js';
import { NewsApi } from '../../js/modules/NewsApi.js';
import { NewsCardList } from '../../js/components/NewsCardList.js';
import { NewsCard } from '../../js/components/NewsCard.js'

export const dataStorage = new DataStorage();
export const searchInput = new SearchInput(submitSearchForm, dataStorage);
export const newsApi = new NewsApi(config);
export const newsCard = new NewsCard();
export const newsCardList = new NewsCardList(document.querySelector('.search-results__cards'), newsCard.create, dataStorage);
searchInput.render();
newsCardList.render();
