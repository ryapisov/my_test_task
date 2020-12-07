import React from 'react'

function FormComponent() {
  const [username, setUserName] = React.useState('')
  const [password, setPassword] = React.useState('')

  const usernameHandler = (e) =>{
    const {value} = e.target
    setUserName(value)
    //TODO: validation
  }

  const passwordHandler = (e) =>{
    const {value} = e.target
    setPassword(value)
    //TODO: validation
  }

  return(
    <form>
      <h2>форма входа</h2>
      <input 
        value={username} 
        onChange={(e) => usernameHandler(e)}
        placeholder="Пользователь"
        name="username"
        type="text"
      />
      <input 
        value={password} 
        onChange={(e) => passwordHandler(e)}
        placeholder="Пароль"
        name="password"
        type="password"
      />
      <button
        type="submit"
      >Войти
      </button>
    </form>
  )
}

export default FormComponent