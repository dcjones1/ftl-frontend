import React from 'react'
import { gameHeight, gameWidth, spaceWidth } from '../helpers/constants'

const Space = () => {
  const spaceStyle = {
    fill: '#3f3f3f'
  }
  return (
    <rect
      style={spaceStyle}
      x={0}
      y={0}
      height={gameHeight}
      width={spaceWidth}
    />
  )
}

export default Space
