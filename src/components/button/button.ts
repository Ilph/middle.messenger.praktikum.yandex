import buttonTpl from "./button.hbs"
import { Block } from "../../utils/Block"

export interface IButton {
  [key: string]: string | {
    [key: string]: string | ((event: MouseEvent) => void)
  }
}

export class Button extends Block<IButton> {
  constructor(props: IButton) {
    super("button", props)
  }
  
  render() {
    return this.compile(buttonTpl, {
      value: this.props.data.value
    })

  }
}
