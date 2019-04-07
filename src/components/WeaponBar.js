import React from 'react'
import withStyles from 'react-jss'

const styles = {
  text: {
    fill: 'white',
    fontSize: '1.3rem',
  }
}

const WeaponBar = (props) => {
  const { classes } = props
  return (
    <g>
      <text
        className={classes.text}
        x="150"
        y="800"
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
