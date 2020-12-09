import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {fetchUsers, rewriteUsers, addUser} from '../../../store/actions/usersActions'
import {UserNew} from './UserNew'
import {UserItem} from './UserItem'
import {Button} from './Button'

export const UserList = () => {
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
      <UserNew />
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


// import React from 'react'
// import {useDispatch, useSelector} from 'react-redux'
// import {addCustomerAction, removeCustomerAction} from './store/actions/customersActions'
// import {fetchCustomers} from './redux/actions/customersActions'

// export const UserList = () => {
//   const dispatch = useDispatch()
//   const cash = useSelector(s => s.cash.cash)
//   const customers = useSelector(s => s.customers.customers)

//   const addCash = () => {
//     dispatch({type:'ADD_CASH', cash:5})
//   }

//   const removeCash = () => {
//     dispatch({type:'GET_CASH', cash:1})
//   }

//   const addCustomer = (name) => {
//     const customer = {
//       name: name,
//       id: Date.now()
//     }
//     dispatch(addCustomerAction(customer))
//   }

//   const removeCustomer = (customer) => {
//     dispatch(removeCustomerAction(customer.id))
//   }

//   return (
//     <>
//       {cash}
//       <button onClick={()=> addCash()}>Добавить</button>
//       <button onClick={()=> removeCash()}>Отнять</button>
//       <button onClick={()=> addCustomer(prompt())}>Добавить клиента</button>
//       <button onClick={()=> removeCash()}>Удалить клиента</button>
//       <button onClick={()=> dispatch(fetchCustomers('Леха Ряписов великий прораммист!!!'))}>Получить клиентов</button>
 
//       <div>
//         {customers.length > 0 ? 
//         <div>
//           {customers.length }
//           {customers.map((customer, i)=> 
//             <div onClick={() => removeCustomer(customer)} key={i}>{customer.id} - {customer.username}</div> 
//           )}
//         </div>
//         :
//         <div>
//           Нет клиентов
//         </div> 
//         }
//       </div>
//     </>
//   )
// }