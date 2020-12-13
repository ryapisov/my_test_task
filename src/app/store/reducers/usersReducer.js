import {
  ADD_MANY_USERS,
  ADD_NEW_USER,
  SORT_BY_ID
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
  ]
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

