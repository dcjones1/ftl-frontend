import React from 'react'

const Health = (props) => {
  return (
    <rect
      height="32"
      width="10"
      x={props.position.x}
      y={props.position.y}
      fill="#7CFC00"
      stroke-width="1"
      stroke="#000000"
    />
  )
}

export default Health
