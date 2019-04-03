import React from 'react'
import withStyles from 'react-jss'

const styles = {
  text: {
    fill: 'black',
    font: '1rem bold',
  }
}

const Weapon = (props) => {
  const { classes } = props
  return (
    <g
      className={classes.g}
      onClick={props.togglePlayerLaser}
    >
      <rect
        height="100"
        width="100"
        x={props.position.x}
        y={props.position.y}
        fill="#FFF"
        stroke-width="1"
        stroke="#000000"
      />
      <text
        className={classes.text}
        x={props.position.x + 5}
        y={props.position.y + 45}
      >
        click to fire!
      </text>
    </g>
  )
}

export default withStyles(styles)(Weapon)
