//HTML's templates
import tpl from "./chatMain.hbs"
//Component's template
import { Block } from "../../../../utils/Block"
//icons
import dot from "../../../../../static/icons/3dot.png"
import clip from "../../../../../static/icons/clip.png"
import arrowRigth from "../../../../../static/icons/arrowRigth.png"

export interface ChatMainType {
  [key: string]: string | {
    [key: string]: string
  }
}

export class ChatMain extends Block<ChatMainType> {
  constructor(props: ChatMainType) {
    super("section", props)
  }

  render() {
    return this.compile(tpl, {
      dots: dot,
      clip: clip,
      arrowRigth: arrowRigth
    })
  }
}
