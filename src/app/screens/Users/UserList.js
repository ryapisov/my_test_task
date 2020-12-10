import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {fetchUsers, rewriteUsers, addUser} from '../../store/actions/usersActionsAPI'
import UserItem from './UserItem'
import Button from '../../components/Button'

const UserList = () => {
  const dispatch = useDispatch()
  const users = useSelector((state)=> state.users.users )

  useEffect(()=>{
    dispatch(fetchUsers())
  }, [dispatch])
  
  const sortBy_Id = () => {
    const newUsers= users.sort((prev, next) => prev.id - next.id)
    dispatch(rewriteUsers(newUsers))
  }

  const sortBy_Username = () => {
    const newUsers = users.sort((prev, next) => {
      if ( prev.username < next.username ) return -1
      if ( prev.username < next.username ) return 1
    })
    dispatch(rewriteUsers(newUsers))
  }

  const create_User = () => {
    dispatch(addUser)
  }

  return (
    <>
      <div className="buttons-sort">
        <Button 
          text="Сортировать по ID" 
          onClick={()=>sortBy_Id()} 
          title="Sort by id"
        />
        <Button 
          text="Сортировать по Username" 
          onClick={()=>sortBy_Username()} 
          title="Sort By username"
        />
      </div>
      {users.map((user, i)=> <UserItem key={i} {...user}/>)}
    </>
  )
}

export default UserList