//Component's template
import { ModalWindowAvatar } from "./modal"
import { Button } from "../../../components/button/button"

const buttonProps = {
  data: {
    value: "Поменять"
  },
  attributes: {
    class: "button"
  }
}

const button = new Button(buttonProps)

const props = {
  attributes: {
    class: "modal-overlay",
    "data-close": "true"
  },
  button: button
}

export const modalWindowAvatar = new ModalWindowAvatar(props)
