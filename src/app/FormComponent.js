import React from 'react'

const useValidation = (value, validations) => {
  const [isEmpty, setEmpty] = React.useState(true)
  const [minLengthError, setMinLengthError] = React.useState(false)

  React.useEffect(()=>{
    for (const validation in validations){
      switch(validation){
        case 'minLength':
          value.length < validations[validation]
            ? setMinLengthError(true)
            : setMinLengthError(false)
          break
        case 'isEmpty':
          value ? setEmpty(false) : setEmpty(true)
          break
      }
    }
  }, [value])

  return {
    isEmpty,
    minLengthError
  }
}

const useInput = (initialValue, validations) => {
  const [value, setValue] = React.useState(initialValue)
  const [isDirty, setDirty] = React.useState(false)
  const valid = useValidation(value, validations)

  const onChange = (e) => {
    const {value} = e.target
    setValue(value)
  }
  const onBlur = (e) => {
    setDirty(true)
  }
  return {
    value,
    onChange,
    onBlur,
    isDirty,
    ...valid
  }
}

function FormComponent() {
  const username = useInput('', {isEmpty:true, minLength:3, isUserName:true})
  const password = useInput('', {isEmpty:true, minLength:5, maxLength:30})
  
  return (
    <div>
      <form>
        {username.isDirty && username.isEmpty && <>username неможет быть пустым</>}
        {username.isDirty && username.minLengthError && <>username длинна менее 5 символов</>}
        <input 
          value={username.value} 
          onBlur={(e)=> username.onBlur(e)}
          onChange={(e)=> username.onChange(e)}
          placeholder="Пользователь"
          name="username"
          type="text"
        />
        {password.isDirty && password.isEmpty && <>password не может быть пустым</>}
        {password.isDirty && password.minLengthError && <>password пароль длинна менее 5 символов</>}
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

export default FormComponent