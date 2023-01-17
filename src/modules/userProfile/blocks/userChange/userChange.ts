import tpl from "./userChange.hbs"
import {options} from "./types"

export default (options: options) => {
  return tpl(
    {
      changeData: options.changeData,
      changePassword: options.changePassword,
      exite: options.changePassword
    })
}
