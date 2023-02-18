//Components
import { Error404, Error500 } from "./error"

const props = {
  data: {
    errorNumber500: "500",
    errorNumber404: "404",
    text: "Не туда попали",
    link: "Назад к чатам"
  },
  attributes: {
    class: "error"
  }
}

export function error404Instance() {
  return new Error404(props)
}

export function error500Instance() {
  return new Error500(props)
}
