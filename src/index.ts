import tpl from "./index.hbs"
import { login } from "./pages/authorization/index"
import {registration} from "./pages/registration/index"
import error500 from "./pages/error/error500"
import error404 from "./pages/error/error404"
import profile from "./pages/profile/profile"
import profileData from "./pages/profileData/profileData"
import profilePassword from "./pages/profilePassword/profilePassword"
import {chat} from "./pages/chat/index"
import {createModal} from "./modules/userProfile/utils/createModalWindow"
import "./styles/main.scss"



const root = document.getElementById("root") as HTMLElement

function loginPage() {
  root.appendChild(login.getContent()!)
  chat.dispatchComponentDidMount()
  return root 
}

function registrationPage() {
  root.appendChild(registration.getContent()!)
  chat.dispatchComponentDidMount()
  return root 
}

function error500Page() {
  const result = tpl(
    {page: error500()}
  )
  return root.innerHTML = result
}

function error404Page() {
  const result = tpl(
    {page: error404()}
  )
  return root.innerHTML = result
}

function profilePage() {
  const result = tpl(
    {page: profile()}
  )
  return root.innerHTML = result
}

function profileDataPage() {
  const result = tpl(
    {page: profileData()}
  )
  return root.innerHTML = result
}

function profilePasswordPage() {
  const result = tpl(
    {page: profilePassword()}
  )
  return root.innerHTML = result
}

function chatPage() {
  root.appendChild(chat.getContent()!)
  chat.dispatchComponentDidMount()
  return root
}

const baseUrl = window.location.protocol.toString() + "//"+ window.location.host.toString()

if (window.location.href ==  baseUrl + "/") {
  loginPage()
} else if (window.location.href == baseUrl + "/reg") {
  registrationPage()
} else if (window.location.href == baseUrl + "/error500") {
  error500Page()
} else if (window.location.href == baseUrl + "/error404") {
  error404Page()
} else if (window.location.href == baseUrl + "/profile") {
  profilePage()
  createModal()
} else if (window.location.href == baseUrl + "/profileData") {
  profileDataPage()
} else if (window.location.href == baseUrl + "/profilePassword") {
  profilePasswordPage()
} else if (window.location.href == baseUrl + "/chat") {
  chatPage()
}
