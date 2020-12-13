import React, {useEffect, useState} from 'react'
import {useInputValidation} from '../hooks/useInputValidation'
import {configValid} from '../configs/configValid'
import {useDispatch, useSelector} from 'react-redux'
import {getUsersAPI, rewriteUsers, addUserAPI} from '../store/actions/usersActions'
import iconEditSvg from '../icons/edit.svg'
import iconSaveSvg from '../icons/save.svg'
import iconDeleteSvg from '../icons/delete.svg'
import iconCloseSvg from '../icons/close.svg'
import {Input, Form, Button} from '../style'

function UserItem(props){
  const [isEdit, setIsEdit] = useState(false)
  const userName = useInputValidation('', configValid.userName)
  const lastName = useInputValidation('', configValid.lastName)
  const firstName = useInputValidation('', configValid.firstName)
  const lastLogin = useInputValidation('', configValid.lastLogin)
  const time = new Date().getFullYear()

  const deleteUserHandler = (id) => {
    // TODO: 
    alert('Удаление пользователя')
    setIsEdit(!isEdit)
  }

  const updateUserFormHandler = (e) => {
    e.preventDefault()
    // TODO:
    alert('Обновить пользователя')
    setIsEdit(!isEdit)
  }
  return(
    <Form onSubmit={(e)=> updateUserFormHandler(e)}>
      <span>{props.id}</span>
      <span>{time}</span>
      <input type="hidden" name="userId" value={props.id} />
      <Input
        value={userName.value} 
        onBlur={(e)=> userName.onBlur(e)}
        onChange={(e)=> userName.onChange(e)}
        placeholder="username"
        name="username"
        disabled={!isEdit}
      />
      <Input
        value={firstName.value} 
        onBlur={(e)=> firstName.onBlur(e)}
        onChange={(e)=> firstName.onChange(e)}
        placeholder="firstname"
        name="firstname"
        disabled={!isEdit}
      />
      <Input
        value={lastName.value} 
        onBlur={(e)=> lastName.onBlur(e)}
        onChange={(e)=> lastName.onChange(e)}
        placeholder="lastName"
        name="lastName"
        disabled={!isEdit}
      />
    {
    !isEdit ?
      <Button
        title="Edit"
        onClick={()=>setIsEdit(!isEdit)} 
      ><img src={iconEditSvg} />
      </Button>
    :
      <>
        <Button
          type="submit"
          title="Save"
          disabled={
            !userName.inputValid || 
            !lastName.inputValid || 
            !firstName.inputValid
          }
        ><img src={iconSaveSvg} alt=''/>
        </Button>
        <Button 
          type="button"
          title="Delete"
          onClick={()=>deleteUserHandler(props.id)}
        ><img src={iconDeleteSvg} alt=''/>
        </Button>
        <Button
          type="button"
          title="Cancel" 
          onClick={()=>setIsEdit(!isEdit)} 
        ><img src={iconCloseSvg} alt=''/>
        </Button>
      </>
   }
  </Form>
  )
}

function UserList(){
  const dispatch = useDispatch()
  const users = useSelector((state)=> state.users.users )

  useEffect(()=>{
    dispatch(getUsersAPI())
  }, [dispatch])

  return (
    <>
      <h3>Список пользователей</h3>
      {users.map((user, i)=> <UserItem key={i} {...user} />)}
    </>
  )
}

export default UserList
