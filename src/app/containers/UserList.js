import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getUsers_API} from '../store/actions/actions_API'
import UserItem from './UserItem'

const UserList = () => {
  const dispatch = useDispatch()
  const users = useSelector((state)=> state.users.users )

  const submitUpdateFormHandler = (e) =>{
    e.preventDefault()

    alert('обновить')
  }
  const submitDeleteFormHandler = (e) =>{
    e.preventDefault()

    alert('удалить')
  }

  useEffect(()=>{
    dispatch(getUsers_API())
  }, [dispatch])

  return (
    <>
      <h3>Список пользователей</h3>
      {
        users.map((user, i)=> 
          <UserItem key={i} {...user} 
            submitUpdateFormHandler={submitUpdateFormHandler}
            submitDeleteFormHandler={submitDeleteFormHandler}
          />
        )
      }
    </>
  )
}

export default UserList
