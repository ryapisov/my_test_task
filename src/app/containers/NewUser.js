import React, {useState} from 'react'
import {useInputValidation} from '../hooks/useInputValidation'
import {createNewUser_API} from '../store/actions/actions_API'
import {configValid} from '../configs/configValid'
import {useDispatch, useSelector} from 'react-redux'
import iconSaveSvg from '../icons/save.svg'
import iconCloseSvg from '../icons/close.svg'
import iconAddUserSvg from '../icons/addUser.svg'
import {Input, Button, Notice} from '../components'

function NewUser() {
  const dispatch = useDispatch()
  const store = useSelector(state => state.auth)
  const [isShowForm, setIsShowForm] = useState(true)
  const userName = useInputValidation('', configValid.userName)
  const lastName = useInputValidation('', configValid.lastName)
  const password = useInputValidation('', configValid.password)
  const firstName = useInputValidation('', configValid.firstName)

  const submitHandler = (e) => {
    e.preventDefault()
    // TODO:
    // dispatch(createNewUserAPI({
    //   userName,
    //   lastName,
    //   firstName,
    //   lastLogin: new Date(),
    //   is_active: true
    //   password:
    // }))
    alert('Создание нового пользователя')
  }

  return (
    <>
      <h3>Дабавить пользователя</h3>
      {
      isShowForm 
      ? 
        <Button
          type="button"
          title="Cancel" 
          onClick={()=> setIsShowForm(!isShowForm) } 
        > добавить пользователя<img src={iconAddUserSvg} alt=''/>
        </Button>
      :
        <form onSubmit={submitHandler}>
          {userName.isDirty && userName.message && <Notice>{userName.message}</Notice>}
          {firstName.isDirty && firstName.message && <Notice>{firstName.message}</Notice>}
          {lastName.isDirty && lastName.message && <Notice>{lastName.message}</Notice>}
          {password.isDirty && password.message && <Notice>{password.message}</Notice>}
          { false && <Notice>Загрузка...</Notice>}
          <Input
            value={userName.value} 
            onBlur={(e)=> userName.onBlur(e)}
            onChange={(e)=> userName.onChange(e)}
            placeholder="userName"
            name="userName"
          />
          <Input
            value={firstName.value} 
            onBlur={(e)=> firstName.onBlur(e)}
            onChange={(e)=> firstName.onChange(e)}
            placeholder="firstName"
            name="firstName"
          />
          <Input
            type="text"
            value={lastName.value} 
            onBlur={(e)=> lastName.onBlur(e)}
            onChange={(e)=> lastName.onChange(e)}
            placeholder="lastName"
            name="lastName"
          />
          <Input
            value={password.value} 
            onBlur={(e)=> password.onBlur(e)}
            onChange={(e)=> password.onChange(e)}
            placeholder="password"
            name="password"
          />
          <Button
            type="submit"
            title="Save"
            isActive={
              !userName.inputValid || 
              !lastName.inputValid || 
              !firstName.inputValid
            }
            disabled={
              !userName.inputValid || 
              !lastName.inputValid || 
              !firstName.inputValid
            }
          ><img src={iconSaveSvg} alt=''/>
          </Button>
          <Button
            type="button"
            title="Cancel" 
            onClick={()=> setIsShowForm(!isShowForm) } 
          ><img src={iconCloseSvg} alt=''/>
          </Button>
        </form>
      }
    </>
  )
}

export default NewUser
