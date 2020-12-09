import React from 'react'
import save from '../../../icons/save.svg'

export const UserNew = () => {

  const createUserHandler = (e) => {
    e.preventDefault()
    alert('НОВЫЙ ПОЛЬЗОВАТЕЛЬ')
  }

  return(
    <div className="new-user">
      { 0 ? 
      <div className="error">
        <span>Поле логин не должно быть пустым</span>
        <span>Поле пароль не должно быть пустым</span>
      </div>
      : null
      }
      <form onSubmit={createUserHandler}>
        <span>NEW USER</span>
        <input type="text" placeholder="Ввведите username" />
        <input type="text" placeholder="Ввведите first_name" />
        <input type="text" placeholder="Ввведите last_name" />
        <input type="text" placeholder="Ввведите last_login" />
        <button type="submit" title="Save">
          <img src={save}/>
        </button>
      </form>
    </div>
  )
}

export default UserNew