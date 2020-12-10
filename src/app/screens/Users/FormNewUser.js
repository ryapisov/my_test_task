import React, {useState} from 'react'
import {useInputValidation} from '../../hooks/useInputValidation'
import iconAddUserSvg from '../../icons/addUser.svg'
import iconSaveSvg from '../../icons/save.svg'
import iconCloseSvg from '../../icons/close.svg'
import ErrorMessage from '../../components/ErrorMessage'
import Button from '../../components/Button'

const NewUserForm = () => {
  const [isShow, setIsShow] = useState(true)
  const userName = useInputValidation('', {isEmpty:true, minLength:3, isUserName:true}, 'username')
  const lastName = useInputValidation('', {isEmpty:true, minLength:3, isUserName:true}, 'lastname')
  const firstName = useInputValidation('', {isEmpty:true, minLength:5, maxLength:30}, 'firstname')
  const lastLogin = useInputValidation('', {isEmpty:true, minLength:5, maxLength:30}, 'lastlogin')

  const createUserHandler = (e) => {
    e.preventDefault()
    alert('НОВЫЙ ПОЛЬЗОВАТЕЛЬ')
  }

  return (
    <>
      {
       isShow ? 
        <Button 
          img={iconAddUserSvg} title="add User" 
          text="Дабавить нового пользователя"
          onClick={()=> setIsShow(!isShow) } 
        /> 
        :
        <div className="new-user">
          <form onSubmit={(e)=>createUserHandler(e)}>
          <ErrorMessage text={userName.isDirty && userName.message} />
          <ErrorMessage text={firstName.isDirty && firstName.message} />
          <ErrorMessage text={lastName.isDirty && lastName.message} />
          <ErrorMessage text={lastLogin.isDirty && lastLogin.message} />
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
          />
          <Button
            type="submit"
            img={iconSaveSvg} 
            title="Save"
          />
          <Button
            img={iconCloseSvg} 
            title="Cancel" 
            onClick={()=> setIsShow(!isShow) } 
          />
          </form> 
        </div>
      }
    </>
  )
}

export default NewUserForm