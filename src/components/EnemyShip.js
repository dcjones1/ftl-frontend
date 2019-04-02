import React from 'react'

const EnemyShip = () => {
  const shipStyle = {
    fill: 'red',
  }
  return (
    <rect
      style={shipStyle}
      x={700}
      y={100}
      height={300}
      width={150}
    />
  )
}

export default EnemyShip
