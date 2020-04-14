import '../assets/styles/index.scss';
import '../assets/img/zdjęcie1-min.jpg';
import '../assets/img/js-logo.png';
import { Technologies } from './constants/technologies.const';

function getExperienceDots(experience: number): string {
  return new Array(Math.ceil(experience))
    .fill(null)
    .reduce(
      (result, _, index) =>
        result +
        `<div class="experience__dot ${
          index + 1 > experience ? 'experience__dot--half' : ''
        }"></div>`,
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
        <div class="experience">
            ${getExperienceDots(technology.experience)}
        </div>
        <div class="tech__description">
            ${technology.description}
        </div>
    </div>`,
    '',
  );
}

document.querySelector('#tech').innerHTML = getTechnologyTemplate(Technologies);

export {};
