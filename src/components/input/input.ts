import inputTpl from "./input.hbs"
import {options} from "./types"

export default (options: options) => {
  return inputTpl({
    id: options.id,
    name: options.name,
    style: options.style,
    type: options.style,
    placeholder: options.placeholder
  })
}
