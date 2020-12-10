import React from 'react'

export const ErrorMessage = ({text}) => {
  return text ? <div className="error">{text}</div> : null
}