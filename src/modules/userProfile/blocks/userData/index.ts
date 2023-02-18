//Component's template
import { UserData } from "./userdata"
import { InputProfile } from "../../components/input/input"

const propsInput = {
  email: {
    data: {
      idName: "email",
      name: "Почта",
      nameInput: "email",
      types: "email",
      placeholder: "...loading",
      disabled: "disabled"
    },
    attributes: {
      class: "label-container",
    }
  },
  login: {
    data: {
      idName: "login",
      name: "Логин",
      nameInput: "login",
      types: "text",
      placeholder: "...loading",
      disabled: "disabled"
    },
    attributes: {
      class: "label-container",
    }
  },
  firstName: {
    data: {
      idName: "first_name",
      name: "Имя",
      nameInput: "first_name",
      types: "text",
      placeholder: "...loading",
      disabled: "disabled"
    },
    attributes: {
      class: "label-container",
    }
  },
  secondName: {
    data: {
      idName: "second_name",
      name: "Фамилия",
      nameInput: "second_name",
      types: "text",
      placeholder: "...loading",
      disabled: "disabled"
    },
    attributes: {
      class: "label-container",
    }
  },
  displayName: {
    data: {
      idName: "display_name",
      name: "Имя в чате",
      nameInput: "display_name",
      types: "text",
      placeholder: "...loading",
      disabled: "disabled"
    },
    attributes: {
      class: "label-container",
    }
  },
  phone: {
    data: {
      idName: "phone",
      name: "Телефон",
      nameInput: "phone",
      types: "text",
      placeholder: "...loading",
      disabled: "disabled"
    },
    attributes: {
      class: "label-container",
    }
  }
}

const email = new InputProfile(propsInput.email)
const login = new InputProfile(propsInput.login)
const firstName = new InputProfile(propsInput.firstName)
const secondName = new InputProfile(propsInput.secondName)
const displayName = new InputProfile(propsInput.displayName)
const phone = new InputProfile(propsInput.phone)

const props = {
  data: {
    login: "is loading",
  },
  inputs: [email, login, firstName, secondName, displayName, phone]
}

export const userData = new UserData(props)

const propsInputProfileData = {
  email: {
    data: {
      idName: "email",
      name: "Почта",
      nameInput: "email",
      types: "email",
      placeholder: "...loading",
      disabled: "",
      helperText: "Неверный email"
    },
    attributes: {
      class: "label-container",
    }
  },
  login: {
    data: {
      idName: "login",
      name: "Логин",
      nameInput: "login",
      types: "text",
      placeholder: "...loading",
      disabled: "",
      helperText: "Неверный логин"
    },
    attributes: {
      class: "label-container",
    }
  },
  firstName: {
    data: {
      idName: "first_name",
      name: "Имя",
      nameInput: "first_name",
      types: "text",
      placeholder: "...loading",
      disabled: "",
      helperText: "Неверный ввод имени"
    },
    attributes: {
      class: "label-container",
    }
  },
  secondName: {
    data: {
      idName: "second_name",
      name: "Фамилия",
      nameInput: "second_name",
      types: "text",
      placeholder: "...loading",
      disabled: "",
      helperText: "Неверный ввод фамилии"
    },
    attributes: {
      class: "label-container",
    }
  },
  displayName: {
    data: {
      idName: "display_name",
      name: "Имя в чате",
      nameInput: "display_name",
      types: "text",
      placeholder: "...loading",
      disabled: ""
    },
    attributes: {
      class: "label-container",
    }
  },
  phone: {
    data: {
      idName: "phone",
      name: "Телефон",
      nameInput: "phone",
      types: "text",
      placeholder: "...loading",
      disabled: "",
      helperText: "Неверный ввод номера"
    },
    attributes: {
      class: "label-container",
    }
  }
}

const emailProfileData = new InputProfile(propsInputProfileData.email)
const loginProfileData = new InputProfile(propsInputProfileData.login)
const firstNameProfileData = new InputProfile(propsInputProfileData.firstName)
const secondNameProfileData = new InputProfile(propsInputProfileData.secondName)
const displayNameProfileData = new InputProfile(propsInputProfileData.displayName)
const phoneProfileData = new InputProfile(propsInputProfileData.phone)

const propsProfileData = {
  data: {
    title: ""
  },
  inputs: [emailProfileData, loginProfileData, firstNameProfileData, secondNameProfileData, displayNameProfileData, phoneProfileData]
}

export const userDataProfileData = new UserData(propsProfileData)
