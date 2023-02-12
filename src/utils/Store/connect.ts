import store, {StoreEvents} from "../Store/store"

export function connect(Component) {
  return class extends Component {
    constructor(props) {
      super({...props, ...store.getState()})

      store.on(StoreEvents.Updated, () => {
        this.setProps({...store.getState()})
      })
    }
  } 
}
