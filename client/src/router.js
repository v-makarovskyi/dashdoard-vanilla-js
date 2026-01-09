class Router {
  routes;
  constructor(routes) {
    this.routes = routes;
    this.#loadInitialRoute();
  }

  loadRoute(urlSegments) {
    console.log('urlSSSSS', urlSegments)
    urlSegments = urlSegments.replace("/", "");
    const matchedRoute = this.#mathedUrlToRoute(urlSegments);

    const url = `/${urlSegments}`;
    window.history.pushState({}, "", url);
    return matchedRoute.template;
  }

  #mathedUrlToRoute(...urlSegments) {
    const matchedRoute = this.routes.find((route) => {
      const routePathSegments = route.path.split("/").slice(1);
      if (urlSegments.length !== routePathSegments.length) {
        return false;
      }
      return routePathSegments.every(
        (segment, idx) => segment === urlSegments[idx]
      );
    });

    return matchedRoute;
  }

  #loadInitialRoute() {
    this.loadRoute(window.location.pathname);
  }
}

export { Router };
