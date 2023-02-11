//Component's of pages
import { loginInstance } from "./pages/authorization/index"
import { registrationInstance } from "./pages/registration/index"
import { error404Instance, error500Instance } from "./pages/error/index"
import { profileInstance } from "./pages/profile/index"
import { profileDataInstance } from "./pages/profileData/index"
import { profilePasswordInstance } from "./pages/profilePassword/index"
import { chatInstance } from "./pages/chat/index"
//Router
import { Router } from "./utils/Router/Router"
//styles
import "./styles/main.scss"

export const router = new Router("root")

router
  .use("/", loginInstance)
  .use("/sign-up", registrationInstance)
  .use("/settings", profileInstance)
  .use("/messenger", chatInstance)
  .use("/profileData", profileDataInstance)
  .use("/profilePassword", profilePasswordInstance)
  .use("/error500", error500Instance)
  .use("/error404", error404Instance)
  .start()


// const baseUrl = window.location.protocol.toString() + "//"+ window.location.host.toString()

// if (window.location.href ==  baseUrl + "/") {
//   render("root", login)
// } else if (window.location.href == baseUrl + "/reg") {
//   render("root", registration)
// } else if (window.location.href == baseUrl + "/error500") {
//   render("root", error500)
// } else if (window.location.href == baseUrl + "/error404") {
//   render("root", error404)
// } else if (window.location.href == baseUrl + "/profile") {
//   render("root", profile)
// } else if (window.location.href == baseUrl + "/profilePassword") {
//   render("root", profilePassword)
// } else if (window.location.href == baseUrl + "/chat") {
//   render("root", chat)
//   createModal(".chat-header__dropdown-menu button")
// } else if (window.location.href == baseUrl + "/profileData") {
//   render("root", profileData)
//   createModal(".avatar__input")
// } 
