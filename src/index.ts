import '../assets/styles/index.scss';
import { HomeRender } from './home/home';
import { MaterialsTemplate } from './materials/materials.template';
import { MaterialsRender } from './materials/materials';

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('service-worker.js');
  });
}

const routes: { route: string; name: string; render: Function }[] = [
  { name: 'home', route: '/', render: HomeRender },
  { name: 'materials', route: 'materials', render: MaterialsRender },
];

const currentRoute = window.location.pathname;

console.log(currentRoute);
const container: HTMLElement = document.querySelector('#container');

routes.forEach((routeConfig) => {
  const navButtons = document.querySelectorAll(`[route="${routeConfig.name}"]`);
  if (navButtons.length) {
    navButtons.forEach((button) =>
      button.addEventListener('click', (event) => {
        console.log(routeConfig);
        routeConfig.render(container);
      }),
    );
  }
  console.log(currentRoute, routeConfig.route);
  if (currentRoute === routeConfig.route) {
    HomeRender(container);
    // import(/* webpackChunkName: "home" */ `${routeConfig.name}.js`);
  }
});
