import React from 'react'
import withStyles from 'react-jss'

const styles = {
  text: {
    fill: 'white',
    fontSize: '1.3rem',
    userSelect: 'none',
  }
}

const WeaponBar = (props) => {
  const { classes } = props
  return (
    <g>
      <text
        className={classes.text}
        x="710"
        y="895"
      >
        Weapons
      </text>
      <rect
        height="160"
        width="600"
        x="700"
        y="900"
        fill="#000000"
        stroke="#fff"
        strokeWidth="1"
      />
    </g>
  )
}

export default withStyles(styles)(WeaponBar)
