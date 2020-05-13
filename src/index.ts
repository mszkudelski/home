import '../assets/styles/index.scss';
import { setTechnologiesToggleListener } from './partials/technologies';

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('service-worker.js');
  });
}

const techElement = document.getElementById('tech');
const techButton = document.querySelector<HTMLButtonElement>('#tech-button');
setTechnologiesToggleListener(techButton, techElement);

fetch(
  'https://api.stackexchange.com/2.2/users/13093310?order=desc&sort=reputation&site=stackoverflow',
)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    const { badge_counts, reputation, link } = data.items[0];
    document.getElementById('stack-overflow').innerHTML = `
        ${reputation} reputacji
    `;
  });

if (window.matchMedia('(min-width: 768px)').matches) {
  const twitterWidget = document.getElementById('twitter');
  twitterWidget.innerHTML = `
    <a rel="noopener" class="twitter-timeline" href="https://twitter.com/MarekSzkudelski?ref_src=twsrc%5Etfw">Tweets by
        MarekSzkudelski</a>
  `;
  const script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = 'https://platform.twitter.com/widgets.js';
  script.setAttribute('charset', 'utf-8');
  script.defer = true;
  twitterWidget.appendChild(script);
}
