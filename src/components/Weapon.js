import React from 'react'
import withStyles from 'react-jss'

const styles = {
  text: {
    fill: 'white',
    font: '2rem bold',
  }
}

const Weapon = (props) => {
  const { classes } = props
  return (
    <rect
      height="32"
      width="10"
      x={props.position.x}
      y={props.position.y}
      fill="#7CFC00"
      stroke-width="1"
      stroke="#000000"
    >
      <text className={classes.text}>
        Weapon info
      </text>
    </rect>
  )
}

export default Weapon
