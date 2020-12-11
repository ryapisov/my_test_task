import React from 'react'

const Button = (props) => {
  const {children, text, title, type, onClick, img} = props

  const onClickAction = (e) => {
    if (type !== 'submit') {
      e.preventDefault()
      return onClick(e)
    }
  }

  return (
    <button 
      onClick={onClickAction}
      type = { type ? type : null }
      title={title}
    >{children || text}{img ? <img src={img} alt={''} /> : '' }
    </button>
  )
}

export default Button