import React, {useState} from 'react'
import styled from 'styled-components'
import {useInputValidation} from '../hooks/useInputValidation'
import {createNewUserAPI} from '../store/actions/usersActions'
import {configValid} from '../configs/configValid'
import {useDispatch, useSelector} from 'react-redux'
import iconSaveSvg from '../icons/save.svg'
import iconCloseSvg from '../icons/close.svg'
import iconAddUserSvg from '../icons/addUser.svg'

const Input = styled.input`
  display:inline-block;
  outline:none;
  padding: 9px 18px;
  margin-left: 2px;
  border: none;
  font-style: italic;
  background: #7ec4ce;
  width:120px;
  ::placeholder,
  ::-webkit-input-placeholder {
    color: #333;
  }
`

const Button = styled.button`
  display:inline-block;
  outline:none;
  padding: 9px 18px;
  margin-right: 2px;
  border: 1px solid #222;
  font-style: italic;
  background:${p => p.isActive ? '#7ec4ce' : '#7ec4ce' };
  color:${p => p.isActive ? '#d4e6e9' : '#333' };
  img{
    width: 18px;
    margin-left:10px;
  }
  &:hover{
    background:${p => p.isActive ? '#7ec4ce' : '#218ea1' };
  }
`

const Notice = styled.div`
  display: ${(p) => p.display ? 'block' : 'none'};
  padding: 14px 0;
  max-width: 540px;
  margin: 0 auto;
  margin-bottom: 1.0rem;
  background-color: rgba(153, 66, 51, 0.452);
`

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
          <h3>Дабавить пользователя</h3>
          {<Notice display={userName.isDirty && userName.message}>{userName.message}</Notice>}
          {<Notice display={firstName.isDirty && firstName.message}>{firstName.message}</Notice>}
          {<Notice display={lastName.isDirty && lastName.message}>{lastName.message}</Notice>}
          {<Notice display={password.isDirty && password.message}>{password.message}</Notice>}
          {<Notice display={false}>Загрузка...</Notice>}
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
