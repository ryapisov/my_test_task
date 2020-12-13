import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {useInputValidation} from '../hooks/useInputValidation'
import {configValid} from '../configs/configValid'
import {Input, Notice,  Button} from '../components'
import {getTokenAPI, isStatusLoading} from '../store/actions/authActions'

function Auth() {
  const dispatch = useDispatch()
  const store = useSelector(state => state.auth)
  const userName = useInputValidation('test_super', configValid.userName)
  const password = useInputValidation('Nf<U4f<rDbtDxAPn', configValid.password)

  const submitHandler = (e) =>{
    e.preventDefault()
    // // установить индикатор загрузки
    // dispatch(isStatusLoading(true))
    // // отправить данные на сервер
    // dispatch(getTokenAPI({username:userName.value, password:password.value}))
    // // записать токен в хранилище
    // setTokenLocalStorage(store.token)

    alert('отправлено')
  }

  return (
    <form onSubmit={(e)=>submitHandler(e)}>
      <h3>Вход</h3>
      {userName.isDirty && userName.message && <Notice>{userName.message}</Notice>}
      {password.isDirty && userName.message && <Notice>{password.message}</Notice>}
      { false && <Notice>Загрузка...</Notice>}
      <Input
        value={userName.value.trim()} 
        onBlur={(e)=> userName.onBlur(e)}
        onChange={(e)=> userName.onChange(e)}
        placeholder="Пользователь"
        name="userName"
      />
      <Input
        value={password.value.trim()} 
        onBlur={(e)=> password.onBlur(e)}
        onChange={(e)=> password.onChange(e)}
        placeholder="Пароль"
        name="password"
        type="password"
      />
      <Button
        isActive={!userName.inputValid || !password.inputValid}
        disabled={!userName.inputValid || !password.inputValid} 
      >Войти
      </Button>
    </form>
  )
}

export default Auth
