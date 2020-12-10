import axios from 'axios'
import {GET_TOKEN} from '../types'
// {username:'test_super', password:'Nf<U4f<rDbtDxAPn'}
import {isStatusLoading} from './usersActions'

const PATH = 'api-token-auth/'
const PROTOCOL = 'http://'
const ROOT_URL = 'emphasoft-test-assignment.herokuapp.com/'

export const fetchToken = ({username, password}) => async dispatch => {
  try {
    const res = await axios({
      url: 'http://emphasoft-test-assignment.herokuapp.com/api-token-auth/',
      method: 'post',
      timeout: 8000,
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
      dispatch(isStatusLoading(false))
    }
  //  alert('responce STATUS: OK Token:' + res.data.token )
  }catch(err){
    alert('SERVER err' + err)
  }
}
