import React from 'react'

export const useLocalStorage = (key, initialValue='') => {
  const [value, setValue] = React.useState(()=>{
    return localStorage.getItem(key) || initialValue
  })

  React.useEffect(()=>{
    localStorage.setItem(key, value)
  }, [value, key])

  const destroy = () => localStorage.removeItem(key)

  return [value, setValue, destroy]
}