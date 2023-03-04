import store, { StoreEvents } from "../Store/store"

export function connect(mapStateToProps: any) {
  return function wrap(Component: any){
    return class extends Component {
      constructor(props: any) {
        let state = mapStateToProps(store.getState())
        super({ ...props, ...state })

        store.on(StoreEvents.Updated, () => {
          const newState = mapStateToProps(store.getState())
          this.setProps({ ...newState })
          state = newState
        })
      }
    }
  }
}
