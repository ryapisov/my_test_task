import React from 'react'
import './App.css'
import {Provider} from 'react-redux'
import {store} from './store'
import Users from './screens/Users'

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