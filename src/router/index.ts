import { Route } from './route.interface';

function getCurrentRoute(): string {
  return window.location.pathname;
}

function isRouteCurrent(route: string): boolean {
  return getCurrentRoute() === '/' + route;
}

window['__routes'] = {};

function loadPage(routeConfig: Route, container: HTMLElement) {
  if (!routeConfig.loaded) {
    // const script = document.createElement('script');
    // script.onload = function() {
    //   routeConfig.loaded = true;
    //   (function check() {
    //     if (typeof window['__routes'][routeConfig.name] === 'function') {
    //       window['__routes'][routeConfig.name](container);
    //     } else {
    //       // waiting for loading script
    //       setTimeout(check, 50);
    //     }
    //   })();
    // };
    // script.src =
    //   (process.env.HOST_PATH || '') + `${routeConfig.name}.bundle.js`;

    import(`/${routeConfig.name}.bundle.mjs`).then(console.log);

    const styles = document.createElement('link');
    styles.href = (process.env.HOST_PATH || '') + `${routeConfig.name}.css`;
    styles.rel = 'stylesheet';

    // document.body.appendChild(script);
    document.body.appendChild(styles);
  } else {
    window['__routes'][routeConfig.name](container);
  }
}

function changeCurrentRoute(
  routeConfig: Route,
  container: HTMLElement,
  withPushState = true,
) {
  loadPage(routeConfig, container);
  if (withPushState) {
    window.history.pushState(
      {
        route: routeConfig.route,
      },
      routeConfig.title,
      '/' + routeConfig.route,
    );
  }
  document.title = 'Szkudelski Marek - ' + routeConfig.title;
}

function registerRouteLinks(routeConfig: Route, container: HTMLElement) {
  const navButtons = document.querySelectorAll(`[route="${routeConfig.name}"]`);
  if (navButtons.length) {
    navButtons.forEach((button) =>
      button.addEventListener('click', () => {
        if (!isRouteCurrent(routeConfig.route)) {
          changeCurrentRoute(routeConfig, container);
        }
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

    if (isRouteCurrent(routeConfig.route)) {
      loadPage(routeConfig, container);
    }
  });

  window.addEventListener('popstate', (event: PopStateEvent) => {
    const newRoute = routes.find((route) => route.route === event.state.route);
    changeCurrentRoute(newRoute, container, false);
  });
}
