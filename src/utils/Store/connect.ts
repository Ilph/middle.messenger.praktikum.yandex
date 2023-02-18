import store, { StoreEvents } from "../Store/store"

export function connect(mapStateToProps: any) {
  return function wrap(Component: any){
    return class extends Component {
      constructor(props: any) {
        let previousState = mapStateToProps(store.getState())
        super({ ...props, ...previousState })

        store.on(StoreEvents.Updated, () => {
          const stateProps = mapStateToProps(store.getState())
          previousState = stateProps
          this.setProps({ ...stateProps })
        })
      }
    }
  }
}
