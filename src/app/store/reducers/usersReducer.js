import {
  ADD_MANY_USERS,
  SORT_BY_ID,
  ADD_NEW_USER
} from '../types'

const defaultState = {
  users:[
    {
      id: 0,
      username: "USERNAME",
      first_name: "FIRST NAME",
      last_name: "LAST NAME",
      last_login: "LAST_LOGIN",
      is_active: true,
      is_superuser: true
    }
  ],
  user:{
    username:"",
    first_name:"",
    last_name:"",
    password:"",
    is_active:true
  }
}

export const usersReducer = (state = defaultState, action) => {
  switch(action.type){
    case ADD_MANY_USERS:
      return {...state, users:[...state.users, ...action.payload]}
    case SORT_BY_ID:
      return {...state, users:[...action.payload]}
    case ADD_NEW_USER:
      return {...state.user, user: action.payload }
    default:
      return state
  }
}

// export const customersReducer = (state = defaultState, action) => {
//   switch (action.type){
//     case ADD_MANY_CUSTOMERS:
//       return {...state, customers:[...state.customers, ...action.payload]}
//     case ADD_CUSTOMER: 
//       return {...state, customers:[...state.customers, action.payload]}
//     case REMOVE_CUSTOMERS:
//       return {...state, customers: state.customers.filter((customer) => customer.id !== action.payload ) }
//     case 'GO':
//       return {...state, customers: [...state.customers, action.payload]}
//     default:
//       return state
//   }
// }

