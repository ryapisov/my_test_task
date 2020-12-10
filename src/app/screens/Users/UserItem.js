import React, {useState} from 'react'
import iconEditSvg from '../../icons/edit.svg'
import iconSaveSvg from '../../icons/save.svg'
import iconDeleteSvg from '../../icons/delete.svg'
import iconCloseSvg from '../../icons/close.svg'
import ErrorMessage from '../../components/ErrorMessage'
import Button from '../../components/Button'
import useInputValidation from '../../hooks/useInputValidation'

const UserItem = (props) => {
  const [isEdit, setIsEdit] = useState(false)
  const userName = useInputValidation('', {isEmpty:true, minLength:3, isUserName:true}, 'username')
  const firstName = useInputValidation('', {isEmpty:true, minLength:5, maxLength:30}, 'firstname')
  const lastName = useInputValidation('', {isEmpty:true, minLength:3, isUserName:true}, 'lastname')
  const lastLogin = useInputValidation('', {isEmpty:true, minLength:5, maxLength:30}, 'lastlogin')
  // TODO: is_superuser ??
  // TODO: is_active  ??

  /*
    Устанавливает флаг, разрешает или
    запрещает редактировать поля input.
  */
  const openEditHandler = () => {
 
  }
  /* 
    Если форма редактирования закрыта 
    без изменений, тогда вернуть State 
    в начальное состояние.
  */
  // const closeEditHandler = () => {
  //   setUserName(props.username)
  //   setFirstName(props.first_name)
  //   setLastName(props.last_name)
  //   setLastLogin(props.last_login)
  //   setIsEdit(!isEdit)
  // }
  
  const deleteUserHandler = (id) => {
    // TODO  
    alert('Удаление пользователя')
  }

  const updateUserFormHandler = (e) => {
    e.preventDefault()
    // TODO  
    console.log(e.target[0])
    alert('Обновить пользователя')
  
  }

  return (
    <>
      <ErrorMessage text={userName.isDirty && userName.message} />
      <ErrorMessage text={firstName.isDirty && firstName.message} />
      <ErrorMessage text={lastName.isDirty && lastName.message} />
      <ErrorMessage text={lastLogin.isDirty && lastLogin.message} />
      <form onSubmit={(e)=> updateUserFormHandler(e)}>
        {/* <span>ID: {props.id}</span> */}
        <input type="hidden" name="userId" value={props.id} />
        <input
            value={userName.value} 
            onBlur={(e)=> userName.onBlur(e)}
            onChange={(e)=> userName.onChange(e)}
            placeholder="username"
            name="username"
          />
          <input
            value={firstName.value} 
            onBlur={(e)=> firstName.onBlur(e)}
            onChange={(e)=> firstName.onChange(e)}
            placeholder="firstname"
            name="firstname"
          />
          <input
            value={lastName.value} 
            onBlur={(e)=> lastName.onBlur(e)}
            onChange={(e)=> lastName.onChange(e)}
            placeholder="lastName"
            name="lastName"
          />
          <input
            value={lastLogin.value} 
            onBlur={(e)=> lastLogin.onBlur(e)}
            onChange={(e)=> lastLogin.onChange(e)}
            placeholder="lastLogin"
            name="lastLogin"
            record={true} 
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
              onClick={()=>{}} 
            />
          </>
       }
      </form>
    </>
  )
}

export default UserItem 