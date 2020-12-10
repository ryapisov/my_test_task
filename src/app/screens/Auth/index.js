import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {fetchToken} from '../../store/actions/authActions'
import ErrorMessage from '../../components/ErrorMessage'
import TokenMessage from '../../components/TokenMessage'
import {useInputValidation} from '../../hooks/useInputValidation'
import {useLocalStorage} from '../../hooks/useLocalStorage'

const Auth = () => {
  const userName = useInputValidation('test_super', {isEmpty:true, minLength:3, isUserName:true}, 'username')
  const password = useInputValidation('Nf<U4f<rDbtDxAPn', {isEmpty:true, minLength:5, maxLength:30}, 'password')
  const dispatch = useDispatch()
  const store = useSelector(state => state.auth)

  // TODO: добавить токен в localstorage

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(fetchToken({username:userName.value, password:password.value}))
  }

  return (
    <div> {store.token}
      {false && <TokenMessage text={'sadf'} />}
      <ErrorMessage text={userName.isDirty && userName.message} />
      <ErrorMessage text={password.isDirty && password.message} />
      <form onSubmit={(e)=>submitHandler(e)}>
        <input 
          value={userName.value} 
          onBlur={(e)=> userName.onBlur(e)}
          onChange={(e)=> userName.onChange(e)}
          placeholder="Пользователь"
          name="username"
        />
        <input 
          value={password.value} 
          onBlur={(e)=> password.onBlur(e)}
          onChange={(e)=> password.onChange(e)}
          placeholder="Пароль"
          name="password"
          type="password"
        />
        <button 
          type="submit"
          disabled={!userName.inputValid || !password.inputValid} 
        >Войти
        </button>
      </form>
    </div>
  )
}

export default Auth