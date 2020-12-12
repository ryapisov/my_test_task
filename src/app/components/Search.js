import React from 'react'
import styled from 'styled-components'
import iconSearchSvg from '../icons/search.svg'

const Input = styled.input`
  display:inline-block;
  outline:none;
  padding: 9px 18px;
  margin-left: 12px;
  border: none;
  font-style: italic;
  width:16%;
`
const Button = styled.button`
  display:inline-block;
  outline:none;
  padding: 8px 18px 9px 18px;
  margin-right: 2px;
  border: 1px solid #222;
  font-style: italic;
`

export const Search = ({children, text}) => {
  return (
    <>
      Поиск по имени: 
      <Input>
        {children}
      </Input>
      <Button >
        <img src={iconSearchSvg} alt=""/>
      </Button >
    </>
  )
}

export default Search
