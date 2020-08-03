import './index.css';
import { SearchInput } from '../../js/components/SearchInput.js';
import { submitSearchForm } from '../../js/utils/submit-search-form.js'


const searchInput = new SearchInput(submitSearchForm);

searchInput.setEventListeners();
