import React from 'react'

export const Input = ({value, onChange, record}) => {
  return (
    <input 
      type="text" 
      placeholder="" 
      onChange={(e)=> record ? onChange(e.target.value) : null} 
      value={value || ''} 
    />
  )
}