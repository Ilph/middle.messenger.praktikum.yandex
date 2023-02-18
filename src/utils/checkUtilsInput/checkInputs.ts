export function checkLogin(login: string): boolean {
  const regLogin = /^[a-zA-Z][a-zA-Z0-9-_]{3,20}$/
  return regLogin.test(login)
}

export function checkPassword(password: string): boolean {
  const regPassword = /^.*(?=.{8,40})(?!.*\s)(?=.*[a-z])(?=.*[A-Z])(?=.*\d).*$/
  return regPassword.test(password)
}

export function checkEmail(email: string): boolean {
  const regEmail = /^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/
  return regEmail.test(email)
}

export function checkName(name: string): boolean {
  const regName = /^[А-ЯA-Z][а-яА-ЯёЁa-zA-Z-]+$/
  return regName.test(name)
}

export function checkPhone(phone: string): boolean {
  const regPhone = /^[+0-9]{10,15}/
  return regPhone.test(phone)
}

export function checkMessage(message: string): boolean {
  const regMessage = /\./
  return regMessage.test(message)
}

const checkInputs = {
  login: checkLogin,
  password: checkPassword,
  oldPassword: checkPassword,
  newPassword: checkPassword,
  repeatPassword: checkPassword,
  email: checkEmail,
  firstName: checkName,
  secondName: checkName,
  phone: checkPhone,
  message: checkMessage
}

export const checkInputFocusIn = (event: FocusEvent) => {
  event.preventDefault()
  event.stopPropagation()
  const tag = (<HTMLInputElement>event.target)
  const tagName = tag.tagName
  const tagId = tag.id
  const helpertext = document.querySelector(`${tagName}[id=${tagId}] ~ .helpertext`)

  Object.entries(checkInputs).forEach(([key, values]) => {
    if(tag!.id === key && tag!.value !== "") {
      if(!values(tag!.value)) {
        helpertext!.classList.toggle("helpertexton")
      }
    }
  })
}

export const checkInputFocusOut = (event: FocusEvent) => {
  event.preventDefault()
  event.stopPropagation()
  const tag = (<HTMLInputElement>event.target)
  const tagName = tag!.tagName
  const tagId = tag!.id
  const helpertext = document.querySelector(`${tagName}[id=${tagId}] ~ .helpertext`)
  
  Object.entries(checkInputs).forEach(([key, values]) => {
    if(tag!.id === key && tag!.value !== "") {
      if(!values(tag!.value)) {
        helpertext!.classList.toggle("helpertexton")
      }
    }
  })
}

export function getDataInput() {
  const inputsData: any = {}
  const inputs: NodeListOf<HTMLInputElement> = document.querySelectorAll("form input")
  inputs.forEach(item => {
    inputsData[item.id] = item.value
    item.value = ""
  })
  return inputsData
}
