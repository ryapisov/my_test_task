export const configValid = {
  userName: {
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
  firstName: {
    title: 'First Name',
    pattern:/^[a-zA-Z\s]+$/,
    isEmpty:true,
    maxLength: 150,
  },
  lastName: {
    title: 'Last Name',
    pattern:/^[a-zA-Z\s]+$/,
    isEmpty:true,
    maxLength: 150
  },
  lastLogin: {
    title: 'Last login',
    isEmpty:true,
    maxLength: 150
  }
}