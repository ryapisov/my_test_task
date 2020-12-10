import {GET_TOKEN} from '../types'
const defaultState = {
  token: null
}

export const authReducer = (state = defaultState, action) => {
  switch(action.type){
    case GET_TOKEN:
      return {...state, token: action.payload.token }
    default:
      return state
  }
}