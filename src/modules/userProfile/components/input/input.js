import tpl from "./input.hbs"

export default (types, name, placeholder, disabled) => {
  return tpl(types, name, placeholder, disabled)
}