export const useValidation = (value, validations) => {
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