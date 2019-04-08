import React from 'react'

const Shield = (props) => {
  const { show } = props
  let x, y
  if (show) {
    x = "505"
    y = "455"
  } else {
    x = "-1000"
    y = "-1000"
  }
  return (
    <ellipse
      id="shield"
      stroke="#000000"
      rx="380"
      ry="280"
      cx={x}
      cy={y}
      fillOpacity=".35"
      strokeWidth="1"
      fill="#75d7ff"
    />
  )
}

export default Shield
