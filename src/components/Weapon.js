import React from 'react'
import withStyles from 'react-jss'

const styles = {
  text: {
    fill: 'black',
    fontSize: '1.3rem',
    wordWrap: 'break-word',
    userSelect: 'none',
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
        strokeWidth="1"
        stroke="#000000"
      />
      <foreignObject
        width="100"
        height="100"
        x={props.position.x + 7}
        y={props.position.y + 10}
      >
        <p
          className={classes.text}
        >auto<br/>fire</p>
      </foreignObject>
    </g>
  )
}

export default withStyles(styles)(Weapon)
