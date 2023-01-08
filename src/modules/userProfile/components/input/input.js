import tpl from "./input.hbs"

export default (types, name, nameInput, placeholder, disabled) => {
  return tpl(types, name, nameInput, placeholder, disabled)
}