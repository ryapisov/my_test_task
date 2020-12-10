import React from 'react'

/**
 * @param {*} value
 * @param {*} validations
*/

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
        default:
          break
      }
    }
  }, [value, validations]) 

  let message
  switch(true) {
    case (isEmpty): message = 'Поле не должно быть пустым'; break
    case (minLengthError): message = 'Минимальная длинна'; break
    default: break
  }
      
  return {
    isEmpty,
    minLengthError,
    message
  }
}

/**
 * @param {*} initialValue
 * @param {*} validations
*/

const useInputValidation = (initialValue, validations) => {
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

export default useInputValidation