import React, {useState} from 'react'
import save from '../../../icons/save.svg'
import addUser from '../../../icons/addUser.svg'
import {Input} from './Input'
import {ErrorsMessage} from './ErrorsMessage'
import {Button} from './Button'

export const UserNew = (props) => {
  const [isEdit, setIsEdit] = useState(false)
  const [userName, setUserName] = useState(props.username || ' ')
  const [firstName, setFirstName] = useState(props.first_name || ' ')
  const [lastName, setLastName] = useState(props.last_name || '')
  const [lastLogin, setLastLogin] = useState(props.last_login || ' ')

  const createUserHandler = (e) => {
    e.preventDefault()
    alert('НОВЫЙ ПОЛЬЗОВАТЕЛЬ')
  }

  return(
    <div className="new-user">
      { 0 ? <ErrorsMessage /> : null}
      <form onSubmit={createUserHandler}>
        <Button type="submit" img={addUser} title="add User" text="Новый пользователь:"/>
        <Input onChange={setUserName} value={userName} name="userName" record={isEdit} />
        <Input onChange={setFirstName} value={firstName} name="firstName" record={isEdit} />
        <Input onChange={setLastName} value={lastName} name="lastName" record={isEdit} />
        <Input onChange={setLastLogin} value={lastLogin} name="lastLogin" record={isEdit} />

        <input type="text" placeholder="Ввведите username" />
        <input type="text" placeholder="Ввведите first_name" />
        <input type="text" placeholder="Ввведите last_name" />
        <input type="text" placeholder="Ввведите last_login" />
        <Button type="submit" img={save} title="Save" />
      </form>
    </div>
  )
}

export default UserNew