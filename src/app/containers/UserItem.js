import React, {useState} from 'react'
import iconEditSvg from '../icons/edit.svg'
import {Input, Form, Button} from '../components'
import EditForm from './EditForm'

const UserItem = (props) => {
  const [isEdit, setIsEdit] = useState(false)

  return(
    <>
     {
      isEdit 
      ? <EditForm {...props}
          onClick={()=>setIsEdit(!isEdit)} 
            submitUpdateFormHandler={props.submitUpdateFormHandler}
            submitDeleteFormHandler={props.submitDeleteFormHandler}
          {...props}
        />      
      :
      <Form >
        <Input
          value={props.id || 'нет значения'}
          placeholder="ID"
          disabled='none'
        />
        <Input
          value={props.username || 'нет значения'} 
          placeholder="user name"
          disabled='none'
        />
        <Input
          value={props.first_name || 'нет значения'} 
          placeholder="first name"
          disabled='none'
        />
        <Input
          value={props.last_name || 'нет значения'} 
          placeholder="last name"
          disabled='none'
        />
        <Input
          value={props.last_login || 'нет значения'}
          placeholder="last login"
          disabled='none'
        />
        <Button
          title="Edit"
          onClick={()=>setIsEdit(!isEdit)} 
        ><img src={iconEditSvg} alt="" />
        </Button>
     </Form>
     }
  </>
  )
}

export default UserItem