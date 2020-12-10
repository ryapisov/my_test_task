import React from 'react'

const Button = (props) => {
  const {children, text, title, type, onClick, img} = props
  return (
    <button 
      onClick={onClick}
      type = { type ? type : null }
      title={title}
    >{children || text}{img ? <img src={img} alt={''} /> : '' }
    </button>
  )
}

export default Button