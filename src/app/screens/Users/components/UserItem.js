import React, {useState} from 'react'
import iconEditSvg from '../../../icons/edit.svg'
import iconSaveSvg from '../../../icons/save.svg'
import iconDeleteSvg from '../../../icons/delete.svg'
import iconCloseSvg from '../../../icons/close.svg'

export const UserItem = (props) => {
  const [isEdit, setIsEdit] = useState(false)

  const {id, username, first_name, last_name,
    last_login, is_superuser
  } = props

  const updateSaveHandler = (data) => {
    // method put
    alert(`обновить и сохранить ${data.id}`)
  }

  const editUser = (data) => {
    
    alert(data.id)
  }

  const deleteUser = () => {
    // method delete
    alert('Удаление пользователя')
  }

  const submitHandler = (e) => {
    e.preventDefault()

    // TODO  
    alert('')
    setIsEdit(false)
  }

  return (
    <>
      { false ? 
      <div className="error">
        <span>Поле логин не должно быть пустым</span>
        <span>Поле пароль не должно быть пустым</span>
      </div>
      : null
      }

      <form onSubmit={(e)=> submitHandler(e)}>
        <span>ID: {id}</span>
        <input type="checkbox" />
        <input type="hidden" value={id} name="userId" />
        <input type="text" placeholder="username" value={username} />
        <input type="text" placeholder="first_name" value={first_name} />
        <input type="text" placeholder="last_name" value={last_name} />
        <input type="text" placeholder="last_login" value={last_login} />
        {
          !isEdit ?
            <button type="submit" title="Edit" onClick={()=>setIsEdit(!isEdit)}>
              <img src={iconEditSvg}/>
            </button>
        : 
          <>
            <button type="submit" title="Save" >
              <img src={iconSaveSvg}/>
            </button>
            <button type="submit" title="Edit" >
              <img src={iconDeleteSvg}/>
            </button>
            <button type="submit" title="Edit" onClick={()=>setIsEdit(!isEdit)}>
              <img src={iconCloseSvg}/>
            </button>
          </>
       }
      </form>
    </>
  )
}