import { Button, IButton } from "./button"

const props = {
  data: {
    value: "sign in"
  }, 
  attributes: {
    class: "button form-auth__button",
    type: "submit"
  }
}

export const button = new Button(props)
