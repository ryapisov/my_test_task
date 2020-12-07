import React from 'react'

const useInput = (initialValue) => {
  const [value, setValue] = React.useState(initialValue)
  const [isDirty, setDirty] = React.useState(false)
  const onChange = (e) => {
    const {value} = e.target
    setValue(value)
  }
  const onBlur = (e) => {
    setDirty(true)
  }
  return {value, onChange, onBlur, isDirty}
}

function FormComponent() {
  const username = useInput('')
  const password = useInput('')

  /* 
    наблюдает за кнопкой, если
    ошибок нет, делает кнопку активной
  */
  // React.useEffect(() => {
  //   if(userNameError || passwordError){
  //     setFormValid(false)
  //   }else{
  //     setFormValid(true)
  //   }
  // }, [userNameError, passwordError])

  return(
    <form>
      <h2>форма входа</h2>
      { username.isDirty  && <>поле username не может быть пустым</>}
      <input 
        value={username.value} 
        onBlur={(e)=> username.onBlur(e)}
        onChange={(e)=> username.onChange(e)}
        placeholder="Пользователь"
        name="username"
        type="text"
      />
      { password.isDirty  && <>поле password не может быть пустым</>}
      <input 
        value={password.value}
        onBlur={(e)=> password.onBlur(e)}
        onChange={(e)=> password.onChange(e)}
        placeholder="Пароль"
        name="password"
        type="password"
      />
      <button
       // disabled={!formValid}
        type="submit"
      >Войти
      </button>
    </form>
  )
}

export default FormComponent