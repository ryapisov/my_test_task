import React, {useEffect, useState} from 'react'
import {useInputValidation} from '../hooks/useInputValidation'
import {configValid} from '../configs/configValid'
import {useDispatch, useSelector} from 'react-redux'
import {getUsersAPI, rewriteUsers, addUserAPI} from '../store/actions/usersActions'
import iconEditSvg from '../icons/edit.svg'
import iconSaveSvg from '../icons/save.svg'
import iconDeleteSvg from '../icons/delete.svg'
import iconCloseSvg from '../icons/close.svg'
import {Input, Form, Notice,  Button} from '../components'
import EditForm from './EditForm'

const UserItem = (props) => {
  const [isEdit, setIsEdit] = useState(false)
  const time = new Date().getFullYear()

  return(
    <>
     {
      isEdit ? <EditForm {...props}/>      
      :
      <Form >
         <Input
          value={'3'}
          placeholder="ID"
          disabled='none'
        />
        <Input
          value={props.lastLogin}
          placeholder="last login"
          disabled='none'
        />
        <Input
          value={props.userName} 
          placeholder="user name"
          disabled='none'
        />
        <Input
          value={props.firstName} 
          placeholder="first name"
          disabled='none'
        />
        <Input
          value={props.lastName} 
          placeholder="last name"
          disabled='none'
        />
        <Button
          title="Edit"
          onClick={()=>setIsEdit(!isEdit)} 
        ><img src={iconEditSvg} />
        </Button>
     </Form>
     }
  </>
  )
}

export default UserItem