import { newsApi } from '../../pages/main/index.js'

export function sendRequest(request) {
  return newsApi.getNews(request);
}
