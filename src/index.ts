import '../assets/styles/index.scss';

window['__routes'] = {};

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('service-worker.js');
  });
}

const routes: {
  route: string;
  name: string;
  render?: Function;
  loaded?: boolean;
}[] = [{ name: 'home', route: '/' }, { name: 'materials', route: 'materials' }];

const currentRoute = window.location.pathname;

const container: HTMLElement = document.querySelector('#container');

function loadPage(routeConfig) {
  if (!routeConfig.loaded) {
    const script = document.createElement('script');
    script.onload = function() {
      routeConfig.loaded = true;
      function check() {
        if (typeof window['__routes'][routeConfig.name] === 'function') {
          window['__routes'][routeConfig.name](container);
        } else {
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
routes.forEach((routeConfig) => {
  const navButtons = document.querySelectorAll(`[route="${routeConfig.name}"]`);
  if (navButtons.length) {
    navButtons.forEach((button) =>
      button.addEventListener('click', (event) => {
        loadPage(routeConfig);
        window.history.pushState('asd', 'Title', routeConfig.route);
      }),
    );
  }

  if (currentRoute === routeConfig.route) {
    loadPage(routeConfig);
  }
});
