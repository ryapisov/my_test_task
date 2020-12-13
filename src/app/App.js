import React from 'react'
import styled from 'styled-components'
import 'normalize.css'
import {Provider} from 'react-redux'
import {store} from './store'
import Auth from '../app/components/Auth'
import UserList from '../app/components/UserList'
import NewUser from '../app/components/NewUser'
import Search from '../app/components/Search'

const Wrapper = styled.div`
  width: 100%; 
  font-family: 'Noto Sans', sans-serif;
  background-color: #333;
  color:#fff;
`
const Section = styled.div`
  font-family: 'Noto Sans', sans-serif;
  padding:20px 0;
  text-align:center;
`
const H2 = styled.div`
  font-size: 30px;
  font-weight:700;
  font-family: 'Marck Script', sans-serif;
  a{
    margin-left: 16px;
    color:#9bb9c4;
    &:hover{
      color: #fff;
      cursor:pointer;
    }
  }
`

function App() {
  return (
    <Provider store={store}>
      <Wrapper>
        <Section> 
          <H2>
            Тестовое задание в компанию 
            <a href="https://emphasoft.com">Emphasoft</a>
          </H2>
        </Section>
        <Section>
          {true && <Auth />}
        </Section>
        <Section>
          {true && <NewUser />}
        </Section>
        <Section>
          {true && <Search />}
        </Section>
        <Section>
          {true && <UserList />}
        </Section>
      </Wrapper>
    </Provider>
  )
}

export default App