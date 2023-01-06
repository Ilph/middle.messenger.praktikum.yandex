import tpl from "./index.hbs"
import login from "./pages/authorization/login.js"
import registration from "./pages/registration/registration.js"
import error500 from "./pages/error/error500.js"
import error404 from "./pages/error/error404.js"
import profile from "./pages/profile/profile.js"
import profileData from "./pages/profileData/profileData.js"
import profilePassword from "./pages/profilePassword/profilePassword.js"
import "./styles/main.scss"



if (window.location.href == "http://localhost:3000/") {
  const result = tpl(
    {page: login()}
  ) 
  document.getElementById("root").innerHTML = result
} else if (window.location.href == "http://localhost:3000/reg") {
  const result = tpl(
    {page: registration()}
  ) 
  document.getElementById("root").innerHTML = result
} else if (window.location.href == "http://localhost:3000/error500") {
  const result = tpl(
    {
      page: error500()
    }
  ) 
  document.getElementById("root").innerHTML = result
} else if (window.location.href == "http://localhost:3000/error404") {
  const result = tpl(
    {
      page: error404()
    }
  ) 
  document.getElementById("root").innerHTML = result
} else if (window.location.href == "http://localhost:3000/profile") {
  const result = tpl(
    {
      page: profile()
    }
  ) 
  document.getElementById("root").innerHTML = result
} else if (window.location.href == "http://localhost:3000/profileData") {
  const result = tpl(
    {
      page: profileData()
    }
  ) 
  document.getElementById("root").innerHTML = result
}
else if (window.location.href == "http://localhost:3000/profilePassword") {
  const result = tpl(
    {
      page: profilePassword()
    }
  ) 
  document.getElementById("root").innerHTML = result
}

