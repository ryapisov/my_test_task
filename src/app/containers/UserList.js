import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getUsersAPI} from '../store/actions/usersActions'
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
    dispatch(getUsersAPI())
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
