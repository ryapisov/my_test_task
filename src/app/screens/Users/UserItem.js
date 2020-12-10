import React, {useState} from 'react'
import iconEditSvg from '../../icons/edit.svg'
import iconSaveSvg from '../../icons/save.svg'
import iconDeleteSvg from '../../icons/delete.svg'
import iconCloseSvg from '../../icons/close.svg'
import Input from '../../components/Input'
import ErrorMessage from '../../components/ErrorMessage'
import Button from '../../components/Button'

const UserItem = (props) => {
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
      { false && <ErrorMessage />}
      <form onSubmit={(e)=> updateUserFormHandler(e)}>
        {/* <span>ID: {props.id}</span> */}
        <input type="hidden" name="userId" value={props.id} />
        <Input 
          onChange={setUserName} 
          value={userName} 
          name="userName" 
          record={isEdit} 
        />
        <Input 
          onChange={setFirstName} 
          value={firstName} 
          name="firstName" 
          record={isEdit} 
        />
        <Input 
          onChange={setLastName} 
          value={lastName} 
          name="lastName" 
          record={isEdit} 
        />
        <Input 
          onChange={setLastLogin} 
          value={lastLogin} 
          name="lastLogin" 
          record={isEdit} 
        />
        {
          !isEdit ?
            <Button 
              title="Edit"
              onClick={openEditHandler} 
              img={iconEditSvg} 
            />
        :
          <>
            <Button 
              type="submit" 
              img={iconSaveSvg} 
              title="Save" 
            />
            <Button  
              img={iconDeleteSvg} 
              title="Delete" 
              onClick={()=>deleteUserHandler(props.id)}
            />
            <Button 
              img={iconCloseSvg} 
              title="Cancel" 
              onClick={closeEditHandler} 
            />
          </>
       }
      </form>
    </>
  )
}

export default UserItem 