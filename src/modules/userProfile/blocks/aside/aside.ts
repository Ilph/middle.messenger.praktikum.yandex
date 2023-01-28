import tpl from "./aside.hbs"
import { Block } from "../../../../utils/Block"
import arrow from "../../../../../static/icons/arrowAside.png"

export interface IAside {
  attributes: {
    class: string
  }
}

export class Aside extends Block<IAside> {
  constructor(props: IAside) {
    super("aside", props)
  }

  render() {
    return this.compile(tpl, {
      arrow: arrow
    })
  }
}
