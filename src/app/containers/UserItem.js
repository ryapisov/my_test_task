import React, {useEffect, useState} from 'react'
import iconEditSvg from '../icons/edit.svg'
import {Input, Form, Notice,  Button} from '../components'
import EditForm from './EditForm'

const UserItem = (props) => {
  const [isEdit, setIsEdit] = useState(false)

  return(
    <>
     {
      isEdit ? <EditForm onClick={()=>setIsEdit(!isEdit)} {...props}/>      
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