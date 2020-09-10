export interface Module {
  template: string;
  callback: Function;
}

export interface RouteConfig {
  route: string;
  name: string;
  title: string;
  load: Function;
}

export class RouteInternal {
  private loaded?: boolean;
  private module?: Module;

  constructor(private config: RouteConfig) {}

  renderPage(container: HTMLElement) {
    container.innerHTML = this.module.template;
    this.module.callback();
  }

  get isLoaded(): boolean {
    return this.loaded;
  }

  setModule(module: Module) {
    this.module = module;
    this.loaded = true;
  }

  get name(): string {
    return this.config.name;
  }
  get title(): string {
    return this.config.title;
  }
  get route(): string {
    return this.config.route;
  }

  loadModule(container): Promise<void> {
    // return Promise.resolve();
    return import(`./${this.name}.js`).then((module) => {
      this.setModule(module.default);
      this.renderPage(container);
    });
  }
}
