import React, {useState} from 'react'
import iconEditSvg from '../../../icons/edit.svg'
import iconSaveSvg from '../../../icons/save.svg'
import iconDeleteSvg from '../../../icons/delete.svg'
import iconCloseSvg from '../../../icons/close.svg'
import {Input} from './Input'

export const UserItem = (props) => {
  const [isEdit, setIsEdit] = useState(false)
  const [userName, setUserName] = useState(props.username || ' ')
  const [firstName, setFirstName] = useState(props.first_name || ' ')
  const [lastName, setLastName] = useState(props.last_name || '')
  const [lastLogin, setLastLogin] = useState(props.last_login || ' ')
  // TODO: is_superuser ??
  // TODO: is_active  ??

  /*
    Устанавливает флаг, разрешает или
    запрещает редактировать поля input.
  */
  const openEditHandler = () => {
    setIsEdit(!isEdit)
  }
  /* 
    Если форма редактирования закрыта 
    без изменений, тогда вернуть State 
    в начальное состояние.
  */
  const closeEditHandler = () => {
    setUserName(props.username)
    setFirstName(props.first_name)
    setLastName(props.last_name)
    setLastLogin(props.last_login)
    setIsEdit(!isEdit)
  }
  
  const deleteUserHandler = (id) => {
    // TODO  
    alert('Удаление пользователя')
  }

  const updateUserFormHandler = (e) => {
    e.preventDefault()
    // TODO  
    console.log(e.target[0])
    alert('Обновить пользователя')
    setIsEdit(false)
  }

  return (
    <>
      { false ? 
      <div className="error">
        <span>Поле логин не должно быть пустым</span>
        <span>Поле пароль не должно быть пустым</span>
      </div>
      : null
      }
      <form onSubmit={(e)=> updateUserFormHandler(e)}>
        <span>ID: {props.id}</span>
        <input type="hidden" name="userId" value={props.id} />
        <input 
          type="checkbox" 
          name="isActive" 
          onChange={()=>setIsEdit(!isEdit)} checked={isEdit} 
        />

        <Input onChange={setUserName} value={userName} record={isEdit} />
        <Input onChange={setFirstName} value={firstName} record={isEdit} />
        <Input onChange={setLastName} value={lastName} record={isEdit} />
        <Input onChange={setLastLogin} value={lastLogin} record={isEdit} />

        {
          !isEdit ?
            <button type="submit" title="Edit" onClick={openEditHandler}>
              <img src={iconEditSvg} alt="edit" />
            </button>
        :
          <>
            <button type="submit" title="Save" >
              <img src={iconSaveSvg} alt="save"/>
            </button>
            <button type="submit" title="Delete" onClick={()=>deleteUserHandler(props.id)}>
              <img src={iconDeleteSvg} alt="delete"/>
            </button>
            <button type="submit" title="Cancel" onClick={closeEditHandler}>
              <img src={iconCloseSvg} alt="cancel" />
            </button>
          </>
       }
      </form>
    </>
  )
}