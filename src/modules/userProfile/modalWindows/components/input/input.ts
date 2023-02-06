//HTML's template
import tpl from "./input.hbs"
//Component's template
import { Block } from "../../../../../utils/Block"

interface IInputAvatarAdd {
  [key: string]: string | {
    [key: string]: string
  }
}

export class InputAvatarAdd extends Block<IInputAvatarAdd> {
  constructor(props: IInputAvatarAdd) {
    super("div", props)
  }

  render() {
    return this.compile(tpl, {})
  }
}
