import { MaterialsTemplate } from './materials.template';

window['__routes'].materials = function(container: HTMLElement) {
  container.innerHTML = MaterialsTemplate;
};
