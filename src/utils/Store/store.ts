import { EventBus } from "../EventBus"
import { set, Indexed } from "../set"

export enum StoreEvents {
  Updated = "updated"
}

class Store extends EventBus {
  public state: Indexed = {}

  public getState() {
    return this.state
  }

  public set(path: string, value: any) {
    set(this.state, path, value)
    this.emit(StoreEvents.Updated)
  }
}

export default new Store()
