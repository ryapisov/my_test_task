import axios from 'axios'
import {
  GET_TOKEN,
  ADD_MANY_USERS,
  URL_PATH_USERS,
  URL_PATH_ROOT,
  URL_PROTOCOL,
  URL_PATH_TOKEN
} from '../types'

export const getUsers_API = (token) => async dispatch => {
  try {
    const res = await axios({
      url: URL_PROTOCOL + URL_PATH_ROOT + URL_PATH_USERS,
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

export const createNewUser_API = (userData) => async dispatch => {
//  console.log(userData)
  try {
    const res = await axios({
      url: URL_PROTOCOL + URL_PATH_ROOT + URL_PATH_USERS,
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

export const deleteUser_API = (id) => async dispatch => {
  try {
    const res = await axios({
      url: URL_PROTOCOL + URL_PATH_ROOT + URL_PATH_USERS + id,
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

export const updateUser_API = (id, userData) => async dispatch => {
  try {
    const res = await axios({
      url: URL_PROTOCOL + URL_PATH_ROOT + URL_PATH_USERS + id,
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

export const getToken_API = ({username, password}) => async dispatch => {
  try {
    const res = await axios({
      url: URL_PROTOCOL + URL_PATH_ROOT + URL_PATH_TOKEN,
      method: 'post',
      timeout: 6000,
      headers: {
        'Content-Type':'application/json',
      },
      data:{
        username,
        password
      }
    })
    if(res.status === 200) {
      dispatch({type:GET_TOKEN, payload:res.data})
    }  
  //  dispatch(isStatusLoading(false))
  }catch(err){
    alert('SERVER err' + err)
  //  dispatch(isStatusLoading(false))
  }
}