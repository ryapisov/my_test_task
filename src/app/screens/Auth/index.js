import React from 'react'
import ErrorMessage from '../../components/ErrorMessage'
import TokenMessage from '../../components/TokenMessage'
import useInputValidation from '../../hooks/useInputValidation'

const Auth = () => { // {username:'test_super', password:'Nf<U4f<rDbtDxAPn'}
  const userName = useInputValidation('test_super', {isEmpty:true, minLength:3, isUserName:true}, 'username')
  const password = useInputValidation('Nf<U4f<rDbtDxAPn', {isEmpty:true, minLength:5, maxLength:30}, 'password')
  
  const submitHandler = (e) => {
    e.preventDefault()
    // TODO
    alert('отправка формы')
  }

  return (
    <div>
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