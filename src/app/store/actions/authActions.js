import axios from 'axios'
import {GET_TOKEN, IS_LOADING} from '../types'

const PATH = 'api-token-auth/'
const PROTOCOL = 'http://'
const ROOT_URL = 'emphasoft-test-assignment.herokuapp.com/'

export const getTokenAPI = ({username, password}) => async dispatch => {
  try {
    const res = await axios({
      url: PROTOCOL+ROOT_URL+PATH,
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
    dispatch(isStatusLoading(false))
  }catch(err){
    alert('SERVER err' + err)
    dispatch(isStatusLoading(false))
  }
}

export const isStatusLoading = (payload) => ({type:IS_LOADING, payload})