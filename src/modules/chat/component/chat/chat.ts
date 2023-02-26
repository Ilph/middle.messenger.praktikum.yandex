import tpl from "./chat.hbs"
import { Block } from "../../../../utils/Block"
import { connect } from "../../../../utils/Store/connect"

export interface IChat {
  [key: string]: {
    [key: string]: string
  } | {
    [key: string]: (event: MouseEvent) => void
  } | {
    [key: string]: boolean
  }
}

class Chat extends Block<IChat> {
  constructor(props: IChat) {
    super("div", props)
  }

  render() {
    console.log(this.props)
    return this.compile(tpl, {
      avatarChat: this.props.avatarChat,
      title: this.props.title,
      created_by: this.props.created_by,
      last_message: this.props.last_message,
      unread_count: this.props.unread_count
    })
  }
}

const wrapper = connect((state: any) => state)
export const chatWithStore = wrapper(Chat)
