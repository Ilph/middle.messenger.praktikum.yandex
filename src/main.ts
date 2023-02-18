//HTML's template
import tpl from "./index.hbs"
//Component's template
import { Block } from "./utils/Block"
//type
import { ILogin } from "./pages/authorization/login"
import { IRegistration } from "./pages/registration/registration"
import { IChatType } from "./pages/chat/chat"
import { IError } from "./pages/error/error"
import { IProfile } from "./pages/profile/profile"
import { IProfileData } from "./pages/profileData/profileData"
import { IProfilePassword } from "./pages/profilePassword/profilePassword"


type IPageTypes = ILogin | IRegistration | IChatType | IError | IProfile | IProfileData | IProfilePassword 

interface IMain {
  attributes?: {
    class: string,
    id: string
  },
  page: Block<IPageTypes>
}

export class Main extends Block<IMain> {
  constructor(props: IMain) {
    super("main", props)
  }

  render() {
    return this.compile(tpl, {})
  }
}
