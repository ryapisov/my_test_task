import {
  ADD_MANY_USERS
} from '../types'

const defaultState = {
  users:[
    {
      id: 0,
      username: "string",
      first_name: "string",
      last_name: "string",
      is_active: true,
      last_login: "2020-12-08T08:03:55.107Z",
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
    case 'SORT_BY_ID':
      return {...state, users:[...action.payload]}
    case 'ADD_NEW_USER':
      return {...state.user, user: action.payload }
    default:
      return state
  }
}


// import {
//   ADD_MANY_CUSTOMERS, 
//   ADD_CUSTOMER, 
//   REMOVE_CUSTOMERS
// } from '../types'

// const defaultState = {
//   customers: [
//     {name:'one', id:1}, 
//     {name:"two", id:2}, 
//     {name:'one1', id:3}, 
//     {name:"tw1o", id:4}
//   ]
// }

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

