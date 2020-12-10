import React from 'react'

const ErrorMessage = ({text}) => {
  return text ? <div className="error">{text}</div> : null
}
export default ErrorMessage