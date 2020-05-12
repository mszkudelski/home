import '../assets/styles/index.scss';
import '../assets/img/zdjęcie1-min.jpg';
import { Technologies } from './constants/technologies.const';
import { Job, Jobs } from './constants/jobs';
import {
  getTechnologyTemplate,
  setTechnologiesToggleListener,
} from './partials/technologies';
import { getJobsTemplate } from './partials/jobs';

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('service-worker.js');
  });
}

const blogIcon = new Image();
blogIcon.src = require(`../assets/img/blog.png`);
blogIcon.alt = 'Blog FrontemDoJS.pl link';

document.getElementById('blog').appendChild(blogIcon);

const jobsElement = document.getElementById('jobs');
jobsElement.innerHTML = getJobsTemplate(Jobs);

const techElement = document.getElementById('tech');
techElement.innerHTML = getTechnologyTemplate(Technologies);

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
