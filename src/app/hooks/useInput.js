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