import { Route } from "./Route"

export class Router {
  private static _instance: Router
  private _currentRoute: any | null
  private _rootQuery: string
  public routes: any[]
  public history: History
    
  constructor(rootQuery: string) {

    if(Router._instance) {
      return Router._instance
    }

    this._rootQuery = rootQuery
    this.routes = []
    this.history = window.history
    this._currentRoute = null
    Router._instance = this
  }

  use(pathname: string, block: InstanceType<any>) {
    const route = new Route(pathname, block, {rootQuery: this._rootQuery})
    this.routes.push(route)
    return this
  }

  start () {
    window.onpopstate = (event: PopStateEvent) => {
      const target = event.currentTarget as Window
      this._onRoute(target.location.pathname)
    }
    
    this._onRoute(window.location.pathname)
  }

  _onRoute(pathname: string) {
    const route = this.getRoute(pathname)
    if(!route) {
      return
    }
    if(this._currentRoute) {
      this._currentRoute.leave()
    }
    this._currentRoute = route
    route.render()
  }

  go(pathname: string) {
    this.history.pushState(`${pathname}`, "", pathname)
    this._onRoute(pathname)
  }

  back() {
    this.history.back()
  }

  forward() {
    this.history.forward()
  }

  getRoute(pathname: string) {
    return this.routes.find(route => route.match(pathname))
  }
}

export default new Router("root")
