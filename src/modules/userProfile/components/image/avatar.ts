import tpl from "./avatar.hbs"
import { Block } from "../../../../utils/Block"
import { createModal } from "../../utils/createModalWindow"

export interface IAvatar {
  attributes: {
    class: string
  }
}

export class Avatar extends Block<IAvatar> {
  constructor(props: IAvatar) {
    super("div", props)
  }

  render() {
    return this.compile(tpl, {})
  }

  protected componentDidMount() {
    createModal("input")
  }
}
