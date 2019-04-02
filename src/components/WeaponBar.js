import React from 'react'
import withStyles from 'react-jss'

const styles = {
  text: {
    fill: 'white',
    font: '2rem bold',
  }
}

const WeaponBar = (props) => {
  const { classes } = props
  return (
    <g>
      <text
        x="150"
        y="800"
        className={classes.text}
      >
        Weapons
      </text>
      <rect
        height="120"
        width="600"
        x="150"
        y="820"
        fill="#000000"
      />
    </g>
  )
}

export default withStyles(styles)(WeaponBar)
