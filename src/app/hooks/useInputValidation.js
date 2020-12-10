import React from 'react'

/**
 * @param {*} value
 * @param {*} validations
*/

const useValidation = (value, validations, nameInput) => {
  const [isEmpty, setEmpty] = React.useState(true)
  const [minLengthError, setMinLengthError] = React.useState(false)
  const [inputValid, setInputValid] = React.useState(false)

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
        default:
          break
      }
    }
  }, [value, validations]) 

  React.useEffect(()=>{
    if(isEmpty || minLengthError){
      setInputValid(false)
    }else{
      setInputValid(true)
    }
  }, [isEmpty, minLengthError])


  let message
  switch(true) {
    case (isEmpty): message = `Поле ${nameInput} не должно быть пустым`; break
    case (minLengthError): message = `В поле ${nameInput} минимальная длинна`; break
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
 * @param {*} initialValue
 * @param {*} validations
*/

export const useInputValidation = (initialValue, validations, nameInput) => {
  const [value, setValue] = React.useState(initialValue)
  const [isDirty, setDirty] = React.useState(false)
  const valid = useValidation(value, validations, nameInput)
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