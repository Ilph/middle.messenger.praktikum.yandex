import tpl from "./userdata.hbs"
import input from "../../components/input/input.js"

export function userData(types, disabled, title, person) {
let templates = ""

person.forEach(item => {
  const tpl = input({
    types: types,
    disabled: disabled,
    nameInput: item.name,
    name: item.title,
    placeholder: item.placholder,
  })
  templates += tpl
})

return tpl({
    title: title,
    template: templates})
}