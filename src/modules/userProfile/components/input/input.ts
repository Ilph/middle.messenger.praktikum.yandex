import tpl from "./input.hbs"
import {options} from "./types"

export default (options: options) => {
  return tpl({
    types: options.types,
    disabled: options.disabled,
    nameInput: options.nameInput,
    name: options.name,
    placeholder: options.placeholder})
}
