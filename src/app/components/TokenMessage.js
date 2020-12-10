import React from 'react'

const TokenMessage = ({text}) => {
  return text ? <div className="token-message">Получен token: &nbsp;{text}</div> : null
}
export default TokenMessage