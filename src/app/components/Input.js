import { findAllByPlaceholderText } from '@testing-library/react'
import React from 'react'

export const Input = (props) => {
  const { type, record, name, onChange, value,  placeholder} = props
  return (
    <input 
      type={type ? type : 'text' }
      onChange={(e)=> onChange(e.target.value)}
      disabled={!record}
      value={value || ''}
      placeholder={placeholder}
      name={name}
    />
  )
}