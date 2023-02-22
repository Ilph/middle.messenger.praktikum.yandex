//Component's of pages
import { loginInstance } from "./pages/authorization/index"
import { registrationInstance } from "./pages/registration/index"
import { error404Instance, error500Instance } from "./pages/error/index"
import { profileInstance } from "./pages/profile/index"
import { profileDataInstance } from "./pages/profileData/index"
import { profilePasswordInstance } from "./pages/profilePassword/index"
import { chatInstance } from "./pages/chat/index"
//Router
import router from "./utils/Router/Router"

//styles
import "./styles/main.scss"
//Controllers
import AuthController from "./controllers/auth-controller"

window.addEventListener("DOMContentLoaded", async () => {
  router
    .use("/", loginInstance)
    .use("/sign-up", registrationInstance)
    .use("/settings", profileInstance)
    .use("/messenger", chatInstance)
    .use("/profileData", profileDataInstance)
    .use("/profilePassword", profilePasswordInstance)
    .use("/error500", error500Instance)
    .use("/error404", error404Instance)


  let isProtectedRoute = true

  switch(window.location.pathname) {
    case("/"):
    case("/sign-up"):
      isProtectedRoute = false
      break
  }
  try {
    await AuthController.fetchUser()
    router.start()
    if(!isProtectedRoute) {
      router.go("/messenger")
    }
  } catch(e) {
    router.start()
    console.log(e)
    if(isProtectedRoute) {
      router.go("/")
    }
  }
})
