import React from 'react'

export const Button = (props) => {
  const {children, text, onClick, img, ...attr} = props
  
  return (
    <button 
      onClick={onClick}
      {...attr}
    >{children || text}  
     {img ? <img src={img} alt={''} /> : '' }
    </button>
  )
}