import React from 'react'
import withStyles from 'react-jss'

const styles = {
  text: {
    fill: 'white',
    fontSize: '1.6rem',
    userSelect: 'none',
  },
}

const Miss = (props) => {
  const { classes, position } = props
  return (
    <text
      className={classes.text}
      x={position.x}
      y={position.y}
    >
      Miss
    </text>
  )
}

export default withStyles(styles)(Miss)
