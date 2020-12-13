import React from 'react'

const useValidation = (value, validations) => {
  const [isEmpty, setEmpty] = React.useState(true)
  const [minLengthError, setMinLengthError] = React.useState(false)
  const [maxLengthError, setMaxLengthError] = React.useState(false)
  const [regularError, setRegularError] = React.useState(false)
  const [inputValid, setInputValid] = React.useState(false)

  React.useEffect(()=>{
    for (const validation in validations){
      switch(validation){
        case 'minLength':
          value.length < validations[validation]
            ? setMinLengthError(true)
            : setMinLengthError(false)
          break
        case 'maxLength':
          value.length > validations[validation]
            ? setMaxLengthError(true)
            : setMaxLengthError(false)
          break
        case 'isEmpty':
          value ? setEmpty(false) : setEmpty(true)
          break
        case 'pattern':
          const re = validations[validation]
          re.test(String(value).toLocaleLowerCase()) 
            ? setRegularError(false)
            : setRegularError(true)
          break
        default:
          break
      }
    }
  }, [value, validations]) 

  React.useEffect(()=>{
    if(isEmpty || minLengthError || maxLengthError || regularError){
      setInputValid(false)
    }else{
      setInputValid(true)
    }
  }, [isEmpty, minLengthError, maxLengthError, regularError])

  let message
  switch(true) {
    case (isEmpty): message = `
      В поле ${validations.title} пусто`
      break
    case (minLengthError): message = `
      В поле ${validations.title} мин. длинна ${validations.minLength} символа`
      break
    case (maxLengthError): message = `
      В поле ${validations.title} не более ${validations.maxLength} символа`
      break
    case (regularError): message = `
      Поле ${validations.title} содержит недопустимые символы`
      break
    default: break
  }
      
  return {
    isEmpty,
    minLengthError,
    message,
    inputValid
  }
}

/**
 * Hook useInputValidation следит за событиями
 * фокуса в поле Input, сохраняет изменения в state
 * 
 * Работает в тестной связке с хуком useValidation
*/

export const useInputValidation = (initialValue, validations) => {
  const [value, setValue] = React.useState(initialValue)
  const [isDirty, setDirty] = React.useState(false)
  const valid = useValidation(value, validations)
  const onChange = (e) => {
    setValue(e.target.value)
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