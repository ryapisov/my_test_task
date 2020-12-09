import React from 'react'

export const ErrorsMessage = (props) => {
  return (
    <div className="error">
        <span>Поле логин не должно быть пустым</span>
        <span>Поле пароль не должно быть пустым</span>
    </div>
  )
}