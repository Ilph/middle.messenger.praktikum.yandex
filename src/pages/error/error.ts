import tpl from "./error.hbs"
import { Block } from "../../utils/Block"

export interface IError {
  [key: string]: string | {
    [key: string]: string
  }
}

export class Error404 extends Block<IError> {
  constructor(props: IError) {
    super("div", props)
  }

  render() {
   return this.compile(tpl, {
      errorNumber: this.props.data.errorNumber404,
      text: this.props.data.text,
      link: this.props.data.link
    })
  }
}

export class Error500 extends Block<IError> {
  constructor(props: IError) {
    super("div", props)
  }

  render() {
   return this.compile(tpl, {
      errorNumber: this.props.data.errorNumber500,
      text: this.props.data.text,
      link: this.props.data.link
    })
  }
}

