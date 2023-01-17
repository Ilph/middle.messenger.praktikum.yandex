import tpl from "./userdata.hbs"
import input from "../../components/input/input"
import {person} from "./model"

export function userData(types: string, disabled: string, person:person) {

  let templates = ""

  person.person.forEach(item => {

    const options = {
      types: types,
      disabled: disabled,
      nameInput: item.name,
      name: item.title,
      placeholder: item.placeholder,
    }

    const tpl = input(options)
    templates += tpl
  })

  return tpl({
      title: person.name,
      template: templates
    })
}
