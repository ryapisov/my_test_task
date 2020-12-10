import {
  ADD_MANY_CUSTOMERS, 
  ADD_CUSTOMER, 
  REMOVE_CUSTOMERS,
  IS_LOADING
} from '../types'

export const addCustomerAction = (payload) => ({type:ADD_CUSTOMER, payload})
export const addManyCustomersAction = (payload) => ({type:ADD_MANY_CUSTOMERS, payload})
export const removeCustomerAction = (payload) => ({type:REMOVE_CUSTOMERS, payload})
export const showCreateUserForm = (payload) => ({type:'SHOW_CREATE_USER_FORM', payload})
export const isStatusLoading = (payload) => ({type:IS_LOADING, payload})