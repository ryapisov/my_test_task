import React from 'react'

/**
 *  const [token, setToken] = useLocalStorage('token', 'foo data')
 * 
 * 
 * */ 

export const useLocalStorage = (key, initialValue='') => {
  const [value, setValue] = React.useState(()=>{
    return localStorage.getItem(key) || initialValue
  })
  
  useEffect(()=>{
    localStorage.setItem(key, value)
  }, [value, key])
  
  return [value, setValue]
}