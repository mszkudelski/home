import { MaterialsTemplate } from './materials.template';
import '../../assets/styles/materials.scss';

export default {
  template: MaterialsTemplate,
  callback: function() {
    const articlesElement = document.querySelector('#articles');

    fetch('articles.html')
      .then((response) => response.json())
      .then((articlesList) => {
        articlesElement.innerHTML = articlesList;
      });
  },
};
