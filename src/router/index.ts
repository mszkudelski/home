import { Route } from './route.interface';

const currentRoute = window.location.pathname;

window['__routes'] = {};

function loadPage(routeConfig: Route, container: HTMLElement) {
  if (!routeConfig.loaded) {
    const script = document.createElement('script');
    script.onload = function() {
      routeConfig.loaded = true;
      function check() {
        if (typeof window['__routes'][routeConfig.name] === 'function') {
          window['__routes'][routeConfig.name](container);
        } else {
          // waiting for loading script
          setTimeout(check, 50);
        }
      }
      check();
    };
    script.src = `${routeConfig.name}.bundle.js`;

    document.body.appendChild(script);
  } else {
    window['__routes'][routeConfig.name](container);
  }
}

function registerRouteLinks(routeConfig: Route, container: HTMLElement) {
  const navButtons = document.querySelectorAll(`[route="${routeConfig.name}"]`);
  if (navButtons.length) {
    navButtons.forEach((button) =>
      button.addEventListener('click', (event) => {
        loadPage(routeConfig, container);
        window.history.pushState('asd', 'Title', routeConfig.route);
      }),
    );
  }
}

export function registerRoutes(routes: Route[], containerSelector: string) {
  const container: HTMLElement = document.querySelector(containerSelector);
  if (!container) {
    throw new Error(
      `App container cannot be queried with ${containerSelector} selector!`,
    );
  }

  routes.forEach((routeConfig) => {
    registerRouteLinks(routeConfig, container);

    if (currentRoute === routeConfig.route) {
      loadPage(routeConfig, container);
    }
  });
}
