import '../assets/styles/index.scss';
import { registerRoutes } from './router';
import { Route } from './router/route.interface';

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('service-worker.js');
  });
}

const routes: Route[] = [
  { name: 'home', route: '', title: 'Strona główna' },
  { name: 'materials', route: 'materials', title: 'Materiały' },
];

registerRoutes(routes, '#container');
