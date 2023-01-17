import buttonTpl from "./button.hbs"
import {options} from "./types"

export default (options: options) => {
  return buttonTpl({value: options.value, style: options.style})
}
