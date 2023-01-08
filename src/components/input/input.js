import inputTpl from "./input.hbs"

export default (id, name, style, type, placeholder) => {
  return inputTpl(id, name, style, type, placeholder)
}