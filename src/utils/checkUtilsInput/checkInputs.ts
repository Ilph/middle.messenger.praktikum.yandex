function checkLogin(login: string): boolean {
  const regLogin = /^[a-zA-Z][a-zA-Z0-9-_]{3,20}$/
  return regLogin.test(login)
}

function checkPassword(password: string): boolean {
  const regPassword = /^.*(?=.{4,40})(?!.*\s)(?=.*[a-z])(?=.*[A-Z])(?=.*\d).*$/
  return regPassword.test(password)
}

function checkEmail(email: string): boolean {
  const regEmail = /^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/
  return regEmail.test(email)
}

function checkName(name: string): boolean {
  const regName = /^[а-яА-ЯёЁa-zA-Z0-9]+$/
  return regName.test(name)
}

function checkPhone(phone: string): boolean {
  const regPhone = /^[0-9]{10,15}/
  return regPhone.test(phone)
}

function checkMessage(message: string): boolean {
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
        tag.value = ""
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

function _getDataInput(): Record<string, string> {
  const inputsData:Record<string, string> = {}
  const inputs: NodeListOf<HTMLInputElement> = document.querySelectorAll("form input")
  inputs.forEach(item => {
    inputsData[item.id] = item.value
  })
  return inputsData
}

function _checkInputsInButton(inputsData: Record<string, string>): boolean[] {
  const result: boolean[] = []
  Object.entries(inputsData).forEach(([key, value]) => {
    Object.entries(checkInputs).forEach(([k, v]) => {
      if(key === k && value) {
        result.push((v(value)))
      }
    })
  })
  return result
}

export const checkButtonSubmit = (event: MouseEvent) => {
  event.preventDefault()
  const inputsData = _getDataInput()
  const result = _checkInputsInButton(inputsData)
  console.log(inputsData)
  if(result.includes(false)) {
    throw new Error("Введите корректные данные")
  }
}
