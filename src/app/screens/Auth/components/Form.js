import React from 'react'
import {ErrorMessage} from '../../../components/ErrorMessage'
import useInputValidation from '../../../hooks/useInputValidation'

export const Form = () => {
  const username = useInputValidation('', {isEmpty:true, minLength:3, isUserName:true}, 'username')
  const password = useInputValidation('', {isEmpty:true, minLength:5, maxLength:30}, 'password')
  
  return (
    <div>
      <form>
        <ErrorMessage text={username.isDirty && username.message} />
        <ErrorMessage text={password.isDirty && password.message} />
        <input 
          value={username.value} 
          onBlur={(e)=> username.onBlur(e)}
          onChange={(e)=> username.onChange(e)}
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
          disabled={username.minLengthError || password.minLengthError} 
          type="submit"
          onClick={()=>{}}
        >Войти
        </button>
      </form>
    </div>
  )
}

export default Form