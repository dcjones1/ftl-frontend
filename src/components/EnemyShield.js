import React from 'react'

const EnemyShield = (props) => {
  const { show } = props
  let x, y
  if (show) {
    x = "1480"
    y = "490"
  } else {
    x = "-1000"
    y = "-1000"
  }
  return (
    <ellipse
      id="enemyShield"
      stroke="#000000"
      rx="330"
      ry="340"
      cx={x}
      cy={y}
      fillOpacity=".35"
      strokeWidth="1"
      fill="#75d7ff"
    />
  )
}

export default EnemyShield
