import { Aside } from "./aside"
import router from "../../../../utils/Router/Router"

const props = {
  attributes: {
    class: "aside"
  },
  events: {
    click: (event: MouseEvent) => {
      event.preventDefault()
      router.back()
    }
  }
}

export const aside = new Aside(props)
export const asideProfileData = new Aside(props)
export const asideProfilePassword = new Aside(props)
