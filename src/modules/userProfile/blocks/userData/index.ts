//Component's template
import { UserData } from "./userdata"
import { InputProfile } from "../../components/input/input"
import { connect } from "../../../../utils/Store/connect"

const propsInput = {
  email: {
    data: {
      idName: "email",
      name: "Почта",
      nameInput: "email",
      types: "email",
      placeholder: "email",
      value: "...loading",
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
      placeholder: "login",
      value: "...loading",
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
      placeholder: "first_name",
      value: "...loading",
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
      placeholder: "second_name",
      value: "...loading",
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
      placeholder: "display_name",
      value: "...loading",
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
      placeholder: "phone",
      value: "...loading",
      disabled: "disabled"
    },
    attributes: {
      class: "label-container",
    }
  }
}

const wrapperInput = connect((state: any) => {
  return state
})
const inputProfile = wrapperInput(InputProfile)

const email = new inputProfile(propsInput.email)
const login = new inputProfile(propsInput.login)
const firstName = new inputProfile(propsInput.firstName)
const secondName = new inputProfile(propsInput.secondName)
const displayName = new inputProfile(propsInput.displayName)
const phone = new inputProfile(propsInput.phone)

const props = {
  data: {
    login: "...loading",
  },
  inputs: [email, login, firstName, secondName, displayName, phone]
}

const wrapper = connect((state: any) => {
  if(state.user) {
     return {data: {login: state.user.data.login}}
  }
})
const userDataWithStore = wrapper(UserData)

export const userData = new userDataWithStore(props)

const propsInputProfileData = {
  email: {
    data: {
      idName: "email",
      name: "Почта",
      nameInput: "email",
      types: "email",
      placeholder: "email",
      value: "...loading",
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
      placeholder: "login",
      value: "...loading",
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
      placeholder: "first_name",
      value: "...loading",
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
      placeholder: "second_name",
      value: "...loading",
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
      placeholder: "display_name",
      value: "...loading",
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
      placeholder: "phone",
      value: "...loading",
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
  inputs: [ emailProfileData,
            loginProfileData,
            firstNameProfileData,
            secondNameProfileData,
            displayNameProfileData,
            phoneProfileData
          ]
}

export const userDataProfileData = new UserData(propsProfileData)
