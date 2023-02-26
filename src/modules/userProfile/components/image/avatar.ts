import tpl from "./avatar.hbs"
import { Block } from "../../../../utils/Block"
import { createModal } from "../../utils/createModalWindow"


export interface IAvatar {
  attributes?: {
    class: string
  },
  data: {
    avatar: string
  }
}

export class Avatar extends Block<IAvatar> {
  constructor(props: IAvatar) {
    super("div", props)
  }

  render() {
    return this.compile(tpl, {
      avatar: this.props.data.avatar
    })
  }

  protected componentDidMount() {
    createModal(".avatar__input")
  }
}
