import React from 'react'

/**
 * Данный hook записывает токен в
 * localStorage, далее использует значение
 * value во всём проекте. C помощью 
 * функции destroy удаляем значение ключа.
 * key - названия ключа в хранилище.
 * initialValue - значение ключа.
 * 
 * */ 

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