import React from 'react'
import './App.css'
import {Provider} from 'react-redux'
import {store} from './store'
import Users from './screens/Users'
import edit from './icons/edit.svg'
import save from './icons/save.svg'

function App() {
  return (
    <Provider store={store}>
      <div className="App"> 
        <div className="close">выйти</div>
        <div className="wrapper">
           <div className="newsletter"> 
            <h2 className="title">
              Тестовое задание в компанию 
              <a href="https://emphasoft.com">Emphasoft</a>
            </h2>
            <Users/>
          </div>
        </div>
      </div>
    </Provider>
  )
}

export default App


{/* <div className="App"> 
<div className="wrapper">
   <div className="newsletter"> 
    <h2 className="title">
      Тестовое задание в компанию 
      <a href="https://emphasoft.com">Emphasoft</a>
    </h2>
    <div className="error">
      <span>Поле логин не должно быть пустым</span>
      <span>Поле пароль не должно быть пустым</span>
    </div>
    <form onSubmit={()=>{}}>
      <input type="text" placeholder="Имя" />
      <input type="text" placeholder="Email" />
      <button type="submit" title="Submit">Отправить</button>
    </form>
  </div>
</div>
</div> */}