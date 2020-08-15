import './index.css';
import { GithubApi } from '../../js/modules/GithubApi.js';
import { CommitCardList } from '../../js/components/CommitCardList.js';
import { CommitCard } from '../../js/components/CommitCard.js';
import { toggleStatus } from '../../js/utils/toggle-status.js'

const githubApi = new GithubApi();
const commitCard = new CommitCard();
const commitCardList = new CommitCardList(document.querySelector('.main-carousel'), commitCard.create);

toggleStatus('commits__error', 'off');

githubApi.getCommits()
  .then((res) => commitCardList.render(res))
  .then(() => {
    const flkty = new Flickity('.main-carousel', {
      selectedAttraction: 0.018,
      arrowShape: {
        x0: 25,
        x1: 50, y1: 25,
        x2: 60, y2: 20,
        x3: 40
      },
      selectedAttraction: 0.01,
      friction: 0.15
    });
  })
  .catch(() => toggleStatus('commits__error', 'on'));


