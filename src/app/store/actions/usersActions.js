import axios from 'axios'
import {
  ADD_MANY_USERS,
  SORT_BY_ID
} from '../types'

const PATH = 'api/v1/users/'
const PROTOCOL = 'http://'
const ROOT_URL = 'emphasoft-test-assignment.herokuapp.com/'

export const getUsersAPI = (token) => async dispatch => {
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
    alert('SERVER err' + err)
  }
}

export const createNewUserAPI = (userData) => async dispatch => {
//  console.log(userData)
  try {
    const res = await axios({
      url: PROTOCOL + ROOT_URL + PATH,
      method: 'post',
      timeout: 8000,
      headers: {
        'Content-Type':'application/json',
        'Authorization':``
       // 'Authorization':`Token ${'781bd9f1de084f4daa7ba2aa8a71a2eab855354e'}`
      },
      data:{
        username: 'test_super',
        first_name: userData.firstName,
        last_name: userData.lastName,
        password:'Nf<U4f<rDbtDxAPn',
        is_active: true
      }
    })
    if(res.status === 200) {
      dispatch({type:'ADD_NEW_USER', payload:res.data})
    }
  }catch(err){
    alert('SERVER err' + err)
  }
}

export const deleteUserAPI = (id) => async dispatch => {
  try {
    const res = await axios({
      url: PROTOCOL + ROOT_URL + PATH + id,
      method: 'delete',
      timeout: 8000,
      headers: {
        'Content-Type':'application/json',
        'Authorization':`Token ${'781bd9f1de084f4daa7ba2aa8a71a2eab855354e'}`
      }
    })
    if(res.status === 200) {
      dispatch({type:'DELETE_USER', payload:res.data}) //id
    }
  }catch(err){
    alert('SERVER err' + err)
  }
}

export const updateUserAPI = (id, userData) => async dispatch => {
  try {
    const res = await axios({
      url: PROTOCOL + ROOT_URL + PATH + id,
      method: 'patch',
      timeout: 8000,
      headers: {
        'Content-Type':'application/json',
        'Authorization':`Token ${'781bd9f1de084f4daa7ba2aa8a71a2eab855354e'}`
      },
      data:{
        username: 'test_super',
        first_name: userData.firstName,
        last_name: userData.lastName,
        password:'Nf<U4f<rDbtDxAPn',
        is_active: true
      }
    })
    if(res.status === 200) {
      dispatch({type:'UPDATE_USER', payload:res.data})
    }
  }catch(err){
    alert('SERVER err' + err)
  }
}

export const rewriteUsers = (payload) => ({type:SORT_BY_ID, payload})