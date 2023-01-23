import tpl from "./index.hbs"
import { Block } from "./utils/Block"

export class Main extends Block<IMain> {
  constructor(props) {
    super("main", props)
  }

  render() {
    return this.compile(tpl, {})
  }
}
