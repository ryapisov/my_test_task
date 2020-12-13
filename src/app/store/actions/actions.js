import axios from 'axios'
import {
  GET_TOKEN, 
  IS_LOADING
} from '../types'



export const isStatusLoading = (payload) => ({type:IS_LOADING, payload})
export const rewriteUsers = (payload) => ({type:SORT_BY_ID, payload})