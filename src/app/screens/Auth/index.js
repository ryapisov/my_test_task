import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {fetchToken} from '../../store/actions/authActionsAPI'
import {isStatusLoading} from '../../store/actions/actions'
import {useInputValidation} from '../../hooks/useInputValidation'
import {useLocalStorage} from '../../hooks/useLocalStorage'
import {configValid} from '../../configs/configValid'
import ErrorMessage from '../../components/ErrorMessage'
import TokenMessage from '../../components/TokenMessage'
import LoadingMessage from '../../components/LoadingMessage'

const Auth = () => {
  const userName = useInputValidation('test_super', configValid.username)
  const password = useInputValidation('Nf<U4f<rDbtDxAPn', configValid.password)
  const [ tokenLocalStorage,  setTokenLocalStorage] = useLocalStorage('token', '')
  
  const dispatch = useDispatch()
  const store = useSelector(state => state.auth)

  const submitHandler = (e) => {
    e.preventDefault()
    // установить индикатор загрузки
    dispatch(isStatusLoading(true))
    // отправить данные на сервер
    dispatch(fetchToken({username:userName.value, password:password.value}))
    // записать токен в хранилище
    setTokenLocalStorage(store.token)
  }

  return (
    <>
      {store.isLoading && <LoadingMessage text={'Ждите, загрузка...'} />}
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
    </>
  )
}

export default Auth