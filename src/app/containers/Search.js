import React from 'react'
import iconSearchSvg from '../icons/search.svg'
import {Input, Button} from '../components'

export const Search = ({children, text}) => {
  return (
    <form>
      <h3>Поиск по username</h3>
      <Input>
        {children}
      </Input>
      <Button 
        type="button"
        onClick={()=>{}}
      ><img src={iconSearchSvg} alt=""/>
      </Button >
    </form>
  )
}

export default Search
