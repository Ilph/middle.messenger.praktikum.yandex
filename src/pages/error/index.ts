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

export const error404 = new Error404(props)
export const error500 = new Error500(props)
