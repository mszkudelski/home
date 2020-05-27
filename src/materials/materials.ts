import { MaterialsTemplate } from './materials.template';
import '../../assets/styles/materials.scss';

export default function(container: HTMLElement) {
  container.innerHTML = MaterialsTemplate;

  const articlesElement = document.querySelector('#articles');

  fetch('articles.html')
    .then((response) => response.json())
    .then((articlesList) => {
      articlesElement.innerHTML = articlesList;
    });
}
