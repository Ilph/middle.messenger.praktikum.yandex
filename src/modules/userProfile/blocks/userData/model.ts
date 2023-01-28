type personProps = {
  name: string,
  title: string,
  placeholder?: string
}

export type person = {
  name: string,
  person: Array<personProps>
}

export const person: person = {name: "Иван", person: [
  {name: "email", title: "Почта", placeholder: "pochta@yandex.ru"},
  {name: "login", title: "Логин", placeholder : "ivanovivan"},
  {name: "first_name", title: "Имя", placeholder : "Иван"},
  {name: "second_name", title: "Фамилия", placeholder : "Иванов"},
  {name: "display_name", title: "Имя в чате", placeholder : "Иван"},
  {name: "phone", title: "Телефон", placeholder : "+7(909)9673030"},
]}

export const personPassword: person = {name: "Иван", person:[
  {name: "oldPassword", title: "Старый пароль"},
  {name: "newPassword", title: "Новый пароль"},
  {name: "repeateNewPassword", title: "Повторите новый пароль"}
]}
