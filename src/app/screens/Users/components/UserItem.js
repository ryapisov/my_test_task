import React, {useState} from 'react'
import iconEditSvg from '../../../icons/edit.svg'
import iconSaveSvg from '../../../icons/save.svg'
import iconDeleteSvg from '../../../icons/delete.svg'

export const UserItem = (props) => {
  const [checked, setChecked] = useState(false)

  const {id, username, first_name, last_name,
    is_active, last_login, is_superuser
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

  return (
    <>
      { false ? 
      <div className="error">
        <span>Поле логин не должно быть пустым</span>
        <span>Поле пароль не должно быть пустым</span>
      </div>
      : null
      }

      <div style={{margin:'5px'}}>
        <span>ID: {id}</span>
        <input type="checkbox" checked={checked}/> 
        <input type="text" placeholder="username" value={username} />
        <input type="text" placeholder="first_name" value={first_name} />
        <input type="text" placeholder="last_name" value={last_name} />
        <input type="text" placeholder="last_login" value={last_login} />

        <button type="submit" onClick={()=>editUser(props)} title="Edit"><img src={iconEditSvg}/></button>
        <button type="submit" onClick={()=>updateSaveHandler(props)} title="Save"><img src={iconSaveSvg}/></button>
        <button type="submit" onClick={()=>{}} title="Edit"><img src={iconDeleteSvg}/></button>
      </div>
    </>
  )
}