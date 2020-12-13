import React, {useEffect, useState} from 'react'
import {useInputValidation} from '../hooks/useInputValidation'
import {configValid} from '../configs/configValid'
// import {useDispatch, useSelector} from 'react-redux'
// import {getUsers_API, rewriteUsers, addUser_API} from '../store/actions/actions_API'
// import iconEditSvg from '../icons/edit.svg'
import iconSaveSvg from '../icons/save.svg'
import iconDeleteSvg from '../icons/delete.svg'
import iconCloseSvg from '../icons/close.svg'
import {Input, Form, Notice,  Button} from '../components'

function EditForm(props){
  const userId = props.id || ''
  const userName = useInputValidation(props.username || '', configValid.userName)
  const lastName = useInputValidation(props.last_name || '', configValid.lastName)
  const firstName = useInputValidation(props.first_name ||'', configValid.firstName)
  const password = useInputValidation(props.password || '', configValid.password)
  const time = new Date().getFullYear()

  return(
    <>
      <Form onSubmit={props.submitUpdateFormHandler}>
        {userName.isDirty && userName.message && <Notice>{userName.message}</Notice>}
        {firstName.isDirty && firstName.message && <Notice>{firstName.message}</Notice>}
        {lastName.isDirty && lastName.message && <Notice>{lastName.message}</Notice>}
        {password.isDirty && password.message && <Notice>{password.message}</Notice>}
        <input type="hidden" name="userId" value={props.id} />
        <Input
          value={userId} 
          placeholder="user id"
          name="user_id"
          disabled="none"
        />
        <Input
          value={userName.value} 
          onBlur={(e)=> userName.onBlur(e)}
          onChange={(e)=> userName.onChange(e)}
          placeholder="user name"
          name="username"
          isActive={true}
        />
        <Input
          value={firstName.value} 
          onBlur={(e)=> firstName.onBlur(e)}
          onChange={(e)=> firstName.onChange(e)}
          placeholder="first name"
          name="first_name"
          isActive={true}
        />
        <Input
          value={lastName.value} 
          onBlur={(e)=> lastName.onBlur(e)}
          onChange={(e)=> lastName.onChange(e)}
          placeholder="last Name"
          name="last_name"
          isActive={true}
        />
        <Input
          value={password.value} 
          onBlur={(e)=> password.onBlur(e)}
          onChange={(e)=> password.onChange(e)}
          placeholder="password"
          name="password"
          isActive={true}
        />
        <Button
          type="submit"
          title="Save"
          isActive={
            !userName.inputValid || 
            !lastName.inputValid || 
            !firstName.inputValid ||
            !password.inputValid 
          }
          disabled={
            !userName.inputValid || 
            !lastName.inputValid || 
            !firstName.inputValid ||
            !password.inputValid 
          }
        ><img src={iconSaveSvg} alt=''/>
        </Button>
        <Button 
          type="button"
          title="Delete"
          onClick={props.submitDeleteFormHandler}
        ><img src={iconDeleteSvg} alt=''/>
        </Button>
        <Button
          type="button"
          title="Cancel" 
          onClick={props.onClick} 
        ><img src={iconCloseSvg} alt=''/>
        </Button>
      </Form>
    </>
  )
}

export default EditForm