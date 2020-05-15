import {
  getTechnologyTemplate,
  setTechnologiesToggleListener,
} from './partials/technologies';
import { HomeTemplate } from './home.template';
import { getJobsTemplate } from './partials/jobs';
import { Jobs } from './constants/jobs';
import { Technologies } from './constants/technologies.const';

window['__routes'].home = function(container: HTMLElement) {
  container.innerHTML = HomeTemplate(
    getJobsTemplate(Jobs),
    getTechnologyTemplate(Technologies.slice(0, 3)),
  );

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
};
