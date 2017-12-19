class Router {
  constructor() {
    this.routes = {};
    this.currentUrl = '';
  }
  //  register route and push into routes object stack
  route(path, callback) {
    this.routes[path] = callback || function(){};
  }
  refresh() {
    this.currentUrl = location.hash.slice(1) || '/';
    this.routes[this.currentUrl]();
  }
  init() {
    window.addEventListener('load', this.refresh.bind(this), false);
    window.addEventListener('hashchange', this.refresh.bind(this), false);
  }
}

export default Router