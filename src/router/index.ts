import { RouteConfig, RouteInternal } from './route.interface';

function getCurrentRoute(): string {
  return window.location.pathname;
}

function isRouteCurrent(route: string): boolean {
  return getCurrentRoute() === '/' + route;
}

window['__routes'] = {};

function loadPage(routeConfig: RouteInternal, container: HTMLElement) {
  if (!routeConfig.isLoaded) {
    routeConfig.loadModule(container);

    const styles = document.createElement('link');
    styles.href = (process.env.HOST_PATH || '') + `${routeConfig.name}.css`;
    styles.rel = 'stylesheet';

    document.body.appendChild(styles);
  } else {
    routeConfig.renderPage(container);
  }
}

function changeCurrentRoute(
  route: RouteInternal,
  container: HTMLElement,
  withPushState = true,
) {
  loadPage(route, container);
  if (withPushState) {
    window.history.pushState(
      {
        route: route.route,
      },
      route.title,
      '/' + route.route,
    );
  }
  document.title = 'Szkudelski Marek - ' + route.title;
}

function registerRouteLinks(
  routeConfig: RouteInternal,
  container: HTMLElement,
) {
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

export function registerRoutes(
  routesConfig: RouteConfig[],
  containerSelector: string,
) {
  const container: HTMLElement = document.querySelector(containerSelector);
  if (!container) {
    throw new Error(
      `App container cannot be queried with ${containerSelector} selector!`,
    );
  }

  const routes = routesConfig.map((route) => new RouteInternal(route));

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
