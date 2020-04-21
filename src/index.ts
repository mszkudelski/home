import '../assets/styles/index.scss';
import '../assets/img/blog.jpg';
import '../assets/img/zdjęcie1-min.jpg';
import { Technologies } from './constants/technologies.const';
import { Job, Jobs } from './constants/jobs';

const myIcon = new Image();
myIcon.src = require(`../assets/img/blog.png`);

document.getElementById('blog').appendChild(myIcon);

function getExperienceDots(experience: number): string {
  return new Array(5)
    .fill(null)
    .reduce(
      (result, _, index) =>
        result +
        `<div class="experience__dot ${
          index + 1 > experience && experience % 1 !== 0
            ? 'experience__dot--half'
            : ''
        } ${index < experience ? 'experience__dot--filled' : ''}"></div>`,
      '',
    );
}

function getTechnologyTemplate(technologies) {
  return technologies.reduce(
    (html, technology) =>
      html +
      `
    <div class="tech__card">
        <img class="tech__img" src="${require(`../assets/img/${
          technology.logo
        }`)}" aria-hidden="true" alt="${technology.name}">
        <div class="tech__img-tooltip">${technology.name}</div>
        <div class="experience">
            ${getExperienceDots(technology.experience)}
            <div class="experience__tooltip experience__tooltip--no-arrow">Poziom doświadczenia i umiejętności*: <span class="experience__value">${
              technology.experience
            }</span></div>
        </div>
        <div class="tech__description">
            ${technology.description}
        </div>
    </div>`,
    '',
  );
}

function getJobsTemplate(jobs: Job[]): string {
  return jobs.reduce(
    (html, job, index) =>
      html +
      ` <div class="jobs__item">
    <div class="jobs__time">
    ${index === 0 ? '<div class="jobs__time-item">obecnie</div>' : ''}
        <div class="jobs__time-line"></div>
        <div class="jobs__time-item">${job.startDate}</div>
    </div>
    <div class="jobs__content">
    <div class="jobs__name">
        ${job.companyName}
        </div>
        <div class="jobs__position">
        ${job.position}
    </div>
    <div class="jobs__description">
        ${job.description}
    </div>
    </div>
    </div>`,
    '',
  );
}

const jobsElement = document.getElementById('jobs');
jobsElement.innerHTML = getJobsTemplate(Jobs);

Array.from(document.querySelectorAll('.jobs__item')).forEach((jobItem) => {
  let expanded;
  jobItem.querySelector('.jobs__name').addEventListener('click', () => {
    if (expanded) {
      jobItem.classList.remove('jobs__item--expanded');
    } else {
      jobItem.classList.add('jobs__item--expanded');
    }
    expanded = !expanded;
  });
});

const techElement = document.getElementById('tech');
techElement.innerHTML = getTechnologyTemplate(Technologies);

let techElementShown = false;
const techButton = document.getElementById('tech-button');
techButton.addEventListener('click', () => {
  if (techElementShown) {
    techElement.style.height = '460px';
    techButton.innerText = 'Zobacz więcej';
  } else {
    techElement.style.height = 'auto';
    techButton.innerText = 'Schowaj';
  }
  techElementShown = !techElementShown;
});

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

export {};
