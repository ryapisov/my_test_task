import React from 'react'
import styled from 'styled-components'
import 'normalize.css'
import {Provider} from 'react-redux'
import {store} from './store'
import Auth from '../app/containers/Auth'
import UserList from '../app/containers/UserList'
import NewUser from '../app/containers/NewUser'
import Search from '../app/containers/Search'
import {Wrapper, Section} from '../app/components'

function App() {
  return (
    <Provider store={store}>
      <Wrapper>
        <Section> 
          <h2>
            Тестовое задание в компанию 
            <a href="https://emphasoft.com">Emphasoft</a>
          </h2>
        </Section>
        <Section>
          {true && <Auth />}
        </Section>
        <Section>
          {false && <NewUser />}
        </Section>
        <Section>
          {false && <Search />}
        </Section>
        <Section>
          {false && <UserList />}
        </Section>
      </Wrapper>
    </Provider>
  )
}

export default App