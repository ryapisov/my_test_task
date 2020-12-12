import React, {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {useInputValidation} from '../../hooks/useInputValidation'
import {configValid} from '../../configs/configValid'
import {createNewUserAPI} from '../../store/actions/usersActions'
import iconAddUserSvg from '../../icons/addUser.svg'
import iconSaveSvg from '../../icons/save.svg'
import iconCloseSvg from '../../icons/close.svg'
import ErrorMessage from '../../components/ErrorMessage'
import Button from '../../components/Button'

const NewUser = () => {
  const [isShow, setIsShow] = useState(true)
  const userName = useInputValidation('', configValid.userName)
  const lastName = useInputValidation('', configValid.lastName)
  const firstName = useInputValidation('', configValid.firstName)
  const lastLogin = useInputValidation('', configValid.lastLogin)
  const dispatch = useDispatch()

  const createUserHandler = (e) => {
    e.preventDefault()
    // TODO:
    // dispatch(createNewUserAPI({
    //   userName,
    //   lastName,
    //   firstName,
    //   lastLogin: new Date(),
    //   is_active: true
    // //  password:''
    // }))
    alert('Cоздать пользователя')
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
        <>
          <form onSubmit={(e)=>createUserHandler(e)}>
            <ErrorMessage text={userName.isDirty && userName.message} />
            <ErrorMessage text={firstName.isDirty && firstName.message} />
            <ErrorMessage text={lastName.isDirty && lastName.message} />
            <ErrorMessage text={lastLogin.isDirty && lastLogin.message} />
            <input
              value={userName.value} 
              onBlur={(e)=> userName.onBlur(e)}
              onChange={(e)=> userName.onChange(e)}
              placeholder="userName"
              name="userName"
            />
            <input
              value={firstName.value} 
              onBlur={(e)=> firstName.onBlur(e)}
              onChange={(e)=> firstName.onChange(e)}
              placeholder="firstName"
              name="firstName"
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
            // onBlur={(e)=> lastLogin.onBlur(e)}
            // onChange={(e)=> lastLogin.onChange(e)}
              placeholder="lastLogin"
              name="lastLogin"
              disabled={true}
            />
            <button
              type="submit"
              title="Save"
              disabled={
                !userName.inputValid || 
                !lastName.inputValid || 
                !firstName.inputValid
              }
            ><img src={iconSaveSvg} alt=''/>
            </button>
            <Button
              img={iconCloseSvg} 
              title="Cancel" 
              onClick={()=> setIsShow(!isShow) } 
            />
          </form> 
        </>
      }
    </>
  )
}

export default NewUser