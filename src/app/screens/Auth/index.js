import React from 'react'
import ErrorMessage from '../../components/ErrorMessage'
import useInputValidation from '../../hooks/useInputValidation'

const Auth = () => {
  const userName = useInputValidation('', {isEmpty:true, minLength:3, isUserName:true}, 'username')
  const password = useInputValidation('', {isEmpty:true, minLength:5, maxLength:30}, 'password')
  
  return (
    <div>
      <form>
        <ErrorMessage text={userName.isDirty && userName.message} />
        <ErrorMessage text={password.isDirty && password.message} />
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
          onClick={()=>{}}
          disabled={!userName.inputValid || !password.inputValid} 
        >Войти
        </button>
      </form>
    </div>
  )
}

export default Auth