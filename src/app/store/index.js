import {createStore, combineReducers, compose, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {authReducer} from './reducers/authReducer'
import {usersReducer} from './reducers/usersReducer'

const rootReducer = combineReducers({
  auth: authReducer,
  users: usersReducer,
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = 
  createStore(
    rootReducer, 
    composeEnhancer(applyMiddleware(thunk))
  )