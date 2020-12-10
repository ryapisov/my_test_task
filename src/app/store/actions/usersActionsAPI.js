import axios from 'axios'
import {
  ADD_MANY_USERS
 // SORT_BY_ID
} from '../types'

const PATH = 'api/v1/users?_pages=10'
const PROTOCOL = 'http://'
const ROOT_URL = 'emphasoft-test-assignment.herokuapp.com/'

export const fetchUsers = (token) => async dispatch => {
  try {
    const res = await axios({
      url: PROTOCOL + ROOT_URL + PATH,
      method: 'get',
      timeout: 8000,
      headers: {
        'Content-Type':'application/json',
        'Authorization':`Token ${'781bd9f1de084f4daa7ba2aa8a71a2eab855354e'}`
      }
    })
    if(res.status === 200) {
      dispatch({type:ADD_MANY_USERS, payload:res.data})
    }
  }catch(err){
    // TODO: errors
    // {username:'test_super', password:'Nf<U4f<rDbtDxAPn'}
  }
}

export const rewriteUsers = (payload) => ({type:'SORT_BY_ID', payload})

export const addUser = ({}) => async dispatch => {
  try {
    const res = await axios({
      url: PROTOCOL + ROOT_URL + PATH,
      method: 'post',
      timeout: 8000,
      headers: {
        'Content-Type':'application/json',
        'Authorization':`Token ${'781bd9f1de084f4daa7ba2aa8a71a2eab855354e'}`
      }
    })
    if(res.status === 200) {
      dispatch({type:'ADD_NEW_USER', payload:res.data})
    }
  }catch(err){
    // TODO: errors
    // {username:'test_super', password:'Nf<U4f<rDbtDxAPn'}
  }
}