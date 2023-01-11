import tpl from "./index.hbs"
import login from "./pages/authorization/login.js"
import registration from "./pages/registration/registration.js"
import error500 from "./pages/error/error500.js"
import error404 from "./pages/error/error404.js"
import profile from "./pages/profile/profile.js"
import profileData from "./pages/profileData/profileData.js"
import profilePassword from "./pages/profilePassword/profilePassword.js"
import chat from "./pages/chat/chat"
import {createModal} from "./modules/userProfile/utils/createModalWindow.js"
import "./styles/main.scss"


function loginPage() {
  const result = tpl(
    {page: login()}
  )
  return document.getElementById("root").innerHTML = result
}

function registrationPage() {
  const result = tpl(
    {page: registration()}
  )
  return document.getElementById("root").innerHTML = result
}

function error500Page() {
  const result = tpl(
    {page: error500()}
  )
  return document.getElementById("root").innerHTML = result
}

function error404Page() {
  const result = tpl(
    {page: error404()}
  )
  return document.getElementById("root").innerHTML = result
}

function profilePage() {
  const result = tpl(
    {page: profile()}
  )
  return document.getElementById("root").innerHTML = result
}

function profileDataPage() {
  const result = tpl(
    {page: profileData()}
  )
  return document.getElementById("root").innerHTML = result
}

function profilePasswordPage() {
  const result = tpl(
    {page: profilePassword()}
  )
  return document.getElementById("root").innerHTML = result
}

function chatPage() {
  const result = tpl(
    {page: chat()}
  )
  return document.getElementById("root").innerHTML = result
}


if (window.location.href == "") {
  loginPage()
} else if (window.location.href == "/reg") {
  registrationPage()
} else if (window.location.href == "/error500") {
  error500Page()
} else if (window.location.href == "/error404") {
  error404Page()
} else if (window.location.href == "/profile") {
  profilePage()
  createModal()
} else if (window.location.href == "/profileData") {
  profileDataPage()
}
else if (window.location.href == "/profilePassword") {
  profilePasswordPage()
}else if (window.location.href == "/chat") {
  chatPage()
}
