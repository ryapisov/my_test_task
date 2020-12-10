import React from 'react'
import './App.css'
import {Provider} from 'react-redux'
import {store} from './store'
import Users from './screens/Users'
import Auth from './screens/Auth'

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
            <Auth />
          </div>
        </div>
      </div>
    </Provider>
  )
}

export default App