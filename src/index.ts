import '../assets/styles/index.scss';
import { registerRoutes } from './router';
import { RouteConfig } from './router/route.interface';

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('service-worker.js');
  });
}

const routes: RouteConfig[] = [
  {
    name: 'home',
    route: '',
    title: 'Strona główna',
    load: () => import(`./home/home`),
  },
  {
    name: 'materials',
    route: 'materials',
    title: 'Materiały',
    load: () => import(`./materials/materials`),
  },
];

registerRoutes(routes, '#container');
