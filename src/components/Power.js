import React from 'react'

const Power = (props) => {
  return (
    <rect
      width="40"
      height="10"
      x={props.position.x}
      y={props.position.y}
      fill="#7CFC00"
      strokeWidth="1.5"
      stroke="#fff"
    />
  )
}

export default Power
