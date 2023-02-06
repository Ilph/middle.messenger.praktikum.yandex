//HTML's template
import tpl from "./modal.hbs"
//Component's template
import { Block } from "../../../utils/Block"
//type
import { IButton } from "../../../components/button/button"

interface IModalWindowAvatar {
  [key: string]: Block<IButton> | {
    [key: string]: string
  }
}

export class ModalWindowAvatar extends Block<IModalWindowAvatar> {
  constructor(props: IModalWindowAvatar) {
    super("div", props)
  }

  render() {
    return this.compile(tpl, {})
  }
}
