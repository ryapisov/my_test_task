export const configValid = {
  username: {
    title: 'Username',
    isEmpty:true,
    pattern: /^[\w.@+-]+$/,
    maxLength: 150,
    minLength: 1
  },
  password: {
    title: 'Password',
    isEmpty:true,
    pattern: /^[\w.@+-<>=?]+$/,
    maxLength: 128,
    minLength: 8
  },
  first_name: {
    title: 'First Name',
    maxLength: 30
  },
  last_name: {
    title: 'Last Name',
    maxLength: 150
  },
  last_login: {
    title: 'Last login',
    maxLength: 150
  }
}