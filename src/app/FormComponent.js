import React from 'react'

function FormComponent() {
  const [username, setUserName] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [userNameDirty, setUserNameDirty] = React.useState(false)
  const [passwordDirty, setPasswordDirty] = React.useState(false)
  const [userNameError, setUserNameError] = React.useState('имя пользователя не должно быть пустым')
  const [passwordError, setPasswordError] = React.useState('пароль не может быть пустым')

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

  /*
    при потере фокуса в поле "input"
    заставляет позаказать уведомление
    о том, что поле пусто.
  */
  const blurHandler = (e) => {
    const {name} = e.target
    switch (name) {
      case 'username':
        setUserNameDirty(true)
        break
      case 'password':
        setPasswordDirty(true)
        break
      default:
        break
    }
  }

  return(
    <form>
      <h2>форма входа</h2>
      {(userNameDirty && userNameError ) && <>{userNameError}</>}
      <input 
        value={username} 
        onBlur={(e) => blurHandler(e)}
        onChange={(e) => usernameHandler(e)}
        placeholder="Пользователь"
        name="username"
        type="text"
      />
       {(passwordDirty && passwordError ) && <>{passwordError}</>}
      <input 
        value={password}
        onBlur={(e) => blurHandler(e)}
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