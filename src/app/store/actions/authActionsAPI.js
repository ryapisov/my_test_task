import axios from 'axios'
import {GET_TOKEN} from '../types'
import {isStatusLoading} from './actions'

const PATH = 'api-token-auth/'
const PROTOCOL = 'http://'
const ROOT_URL = 'emphasoft-test-assignment.herokuapp.com/'

export const fetchToken = ({username, password}) => async dispatch => {
  try {
    const res = await axios({
      url: 'http://emphasoft-test-assignment.herokuapp.com/api-token-auth/',
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
