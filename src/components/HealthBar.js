import React from 'react'
import withStyles from 'react-jss'


const styles = {
  text: {
    fill: 'white',
    font: '2rem bold',
  }
}


const HealthBar = (props) => {
  const { classes } = props
  return (
    <g>
      <text
        x="30"
        y="30"
        className={classes.text}
      >
        Health
      </text>
      <rect
        height="40"
        width="400"
        y="35"
        x="30"
        fill="#000000"
      />
    </g>
  )
}

export default withStyles(styles)(HealthBar)
