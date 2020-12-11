import React, {useState} from 'react'
import {useInputValidation} from '../../hooks/useInputValidation'
import {configValid} from '../../configs/configValid'
import iconEditSvg from '../../icons/edit.svg'
import iconSaveSvg from '../../icons/save.svg'
import iconDeleteSvg from '../../icons/delete.svg'
import iconCloseSvg from '../../icons/close.svg'
import ErrorMessage from '../../components/ErrorMessage'
import Button from '../../components/Button'

const UserItem = (props) => {
  const [isEdit, setIsEdit] = useState(false)
  const userName = useInputValidation('', configValid.userName)
  const lastName = useInputValidation('', configValid.lastName)
  const firstName = useInputValidation('', configValid.firstName)
  const lastLogin = useInputValidation('', configValid.lastLogin)
 
  const openEditHandler = () => {
   // setIsEdit(true)
    alert('Edit бновить пользователя')
    setIsEdit(!isEdit)
  }
 
  const deleteUserHandler = (id) => {
    alert('Удаление пользователя')
    setIsEdit(!isEdit)
  }

  const updateUserFormHandler = (e) => {
    e.preventDefault()
    console.log(e.target[0])
    alert('Обновить пользователя')
    setIsEdit(!isEdit)
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
              onClick={()=>setIsEdit(!isEdit)} 
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
              onClick={()=>setIsEdit(!isEdit)} 
            />
          </>
       }
      </form>
    </>
  )
}

export default UserItem 