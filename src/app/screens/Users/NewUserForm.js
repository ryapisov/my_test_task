import React, {useState} from 'react'
import iconAddUserSvg from '../../icons/addUser.svg'
import iconSaveSvg from '../../icons/save.svg'
import iconCloseSvg from '../../icons/close.svg'
import {Input} from '../../components/Input'
import {ErrorMessage} from '../../components/ErrorMessage'
import {Button} from '../../components/Button'

const NewUserForm = () => {
  const [userName, setUserName] = useState('user name')
  const [firstName, setFirstName] = useState('first name')
  const [lastName, setLastName] = useState('last name')
  const [lastLogin, setLastLogin] = useState('last login')

  const [isShow, setIsShow] = useState(true)

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
          { false && <ErrorMessage />}
          <form onSubmit={(e)=>createUserHandler(e)}>
          <Input 
            onChange={setUserName} 
            value={userName} 
            name="userName" 
            record={true} 
          />
          <Input 
            onChange={setFirstName} 
            value={firstName} 
            name="firstName"
            record={true} 
          />
          <Input 
            onChange={setLastName}
            value={lastName} 
            name="lastName"
            record={true} 
          />
          <Input 
            onChange={setLastLogin}
            value={lastLogin} 
            name="lastLogin"
            record={true}
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