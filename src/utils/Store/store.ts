import { EventBus } from "../EventBus"
import { set } from "../set"
import { User } from "../../api/auth-api"

export enum StoreEvents {
  Updated = "updated"
}

export interface State {
  user: User,
}

class Store extends EventBus {
  private state: any = {}

  public getState() {
    return this.state
  }

  public set(path: string, value: any) {
    set(this.state, path, value)
    this.emit(StoreEvents.Updated)
  }
}

export default new Store()
