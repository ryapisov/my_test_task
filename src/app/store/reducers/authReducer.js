import {
  GET_TOKEN,
  IS_LOADING
} from '../types'

const defaultState = {
  token: null,
  isLoading:false
}

export const authReducer = (state = defaultState, action) => {
  switch(action.type){
    case GET_TOKEN:
      return {...state, token: action.payload.token }
    case IS_LOADING:
      return {...state, isLoading: action.payload}
    default:
      return state
  }
}