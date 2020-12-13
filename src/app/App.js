import React, {useState} from 'react'
import 'normalize.css'
import {Provider} from 'react-redux'
import {store} from './store'
import {Auth, NewUser, Search, UserList } from '../app/containers'
import {Wrapper, Section} from '../app/components'

function App() {
  const [isAuth, setIsAuth] = useState(true)

  return (
    <Provider store={store}>
      <Wrapper>
        <Section> 
          <h2>Тестовое задание в компанию 
            <a href="https://emphasoft.com">Emphasoft</a>
          </h2>
        </Section>
        {
          isAuth
          ? 
          <><Auth />
            <Section><Search /></Section>
            <Section><NewUser /></Section>
            <Section><UserList /></Section>
          </>
          :
          <>
          <Section>
            <Auth />
          </Section>
          <Section>
            Логин:&nbsp; {'test_super'}<br/><br/>
            Пароль:&nbsp; {'Nf<U4f<rDbtDxAPn'}
          </Section>
          </>
        }
      </Wrapper>
    </Provider>
  )
}

export default App