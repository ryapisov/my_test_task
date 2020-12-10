import React from 'react'

const Loading = ({text}) => {
  return text ? <div className="loading-message">&nbsp;{text}</div> : null
}
export default Loading