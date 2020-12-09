import React from 'react'

export const Input = ({type, record, onChange, value,  ...attr}) => {
  return (
    <input 
      type={type ? type : 'text' }
      onChange={(e)=> onChange(e.target.value)}
      disabled={!record}
      value={value || ''}
      {...attr}
    />
  )
}