import { login } from "./pages/authorization/index"
import { registration } from "./pages/registration/index"
import { error404, error500 } from "./pages/error/index"
import { profile } from "./pages/profile/index"
import { profileData } from "./pages/profileData/index"
import { profilePassword } from "./pages/profilePassword/index"
import { chat } from "./pages/chat/index"
import { createModal } from "./modules/userProfile/utils/createModalWindow"
import { Main } from "./main"
import "./styles/main.scss"


const root = document.getElementById("root") as HTMLElement

function loginPage() {
  const mainPage = new Main({
    attributes: {
      class: "main"
    },
    page: login
  })
  root.appendChild(mainPage.getContent()!)
  return root 
}

function registrationPage() {
  const mainPage = new Main({
    attributes: {
      class: "main"
    },
    page: registration
  })
  root.appendChild(mainPage.getContent()!)
  return root 
}

function error500Page() {
  const mainPage = new Main({
    attributes: {
      class: "main"
    },
    page: error500
  })
  root.appendChild(mainPage.getContent()!)
  return root 
}

function error404Page() {
  const mainPage = new Main({
    attributes: {
      class: "main"
    },
    page: error404
  })
  root.appendChild(mainPage.getContent()!)
  return root 
}

function profilePage() {
  const mainPage = new Main({
    attributes: {
      class: "main"
    },
    page: profile
  })
  root.appendChild(mainPage.getContent()!)
  return root 
}

function profileDataPage() {
  const mainPage = new Main({
    attributes: {
      class: "main"
    },
    page: profileData
  })
  root.appendChild(mainPage.getContent()!)
  return root 
}

function profilePasswordPage() {
  const mainPage = new Main({
    attributes: {
      class: "main"
    },
    page: profilePassword
  })
  root.appendChild(mainPage.getContent()!)
  return root 
}

function chatPage() {
  const mainPage = new Main({
    page: chat
  })
  root.appendChild(mainPage.getContent()!)
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
} else if (window.location.href == baseUrl + "/profilePassword") {
  profilePasswordPage()
} else if (window.location.href == baseUrl + "/chat") {
  chatPage()
} else if (window.location.href == baseUrl + "/profileData") {
  profileDataPage()
} 
