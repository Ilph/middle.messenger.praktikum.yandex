//Component's template
import { UserData } from "./userdata"
import { InputProfile } from "../../components/input/input"

const propsInput = {
  email: {
    data: {
      name: "Почта",
      nameInput: "email",
      types: "email",
      placeholder: `zxc`,
      disabled: "disabled"
    },
    attributes: {
      class: "label-container",
    }
  },
  login: {
    data: {
      name: "Логин",
      nameInput: "login",
      types: "text",
      placeholder: `qw`,
      disabled: "disabled"
    },
    attributes: {
      class: "label-container",
    }
  },
  firstName: {
    data: {
      name: "Имя",
      nameInput: "first_name",
      types: "text",
      placeholder: `qwe`,
      disabled: "disabled"
    },
    attributes: {
      class: "label-container",
    }
  },
  secondName: {
    data: {
      name: "Фамилия",
      nameInput: "second_name",
      types: "text",
      placeholder: `qwe`,
      disabled: "disabled"
    },
    attributes: {
      class: "label-container",
    }
  },
  displayName: {
    data: {
      name: "Имя в чате",
      nameInput: "display_name",
      types: "text",
      placeholder: `qwe`,
      disabled: "disabled"
    },
    attributes: {
      class: "label-container",
    }
  },
  phone: {
    data: {
      name: "Телефон",
      nameInput: "phone",
      types: "text",
      placeholder: `qwe`,
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
    title: "Иван"
  },
  inputs: [email, login, firstName, secondName, displayName, phone]
}

export const userData = new UserData(props)


const propsInputProfileData = {
  email: {
    data: {
      id: "email",
      name: "Почта",
      nameInput: "email",
      types: "email",
      placeholder: "pochta@yandex.ru",
      disabled: "",
      helperText: "Неверный email"
    },
    attributes: {
      class: "label-container",
    }
  },
  login: {
    data: {
      id: "login",
      name: "Логин",
      nameInput: "login",
      types: "text",
      placeholder: "ivanovivan",
      disabled: "",
      helperText: "Неверный логин"
    },
    attributes: {
      class: "label-container",
    }
  },
  firstName: {
    data: {
      id: "firstName",
      name: "Имя",
      nameInput: "first_name",
      types: "text",
      placeholder: "Иван",
      disabled: "",
      helperText: "Неверный ввод имени"
    },
    attributes: {
      class: "label-container",
    }
  },
  secondName: {
    data: {
      id: "secondName",
      name: "Фамилия",
      nameInput: "second_name",
      types: "text",
      placeholder: "Иванов",
      disabled: "",
      helperText: "Неверный ввод фамилии"
    },
    attributes: {
      class: "label-container",
    }
  },
  displayName: {
    data: {
      id: "displayName",
      name: "Имя в чате",
      nameInput: "display_name",
      types: "text",
      placeholder: "Иван",
      disabled: ""
    },
    attributes: {
      class: "label-container",
    }
  },
  phone: {
    data: {
      id: "phone",
      name: "Телефон",
      nameInput: "phone",
      types: "text",
      placeholder: "+7(909)9673030",
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
