import React from 'react'
import withStyles from 'react-jss'

const styles = {
  text: {
    fill: 'white',
    fontSize: '1.3rem',
    userSelect: 'none',
  }
}

const Scrap = (props) => {
  const { classes, scrap } = props
  return (
    <g>
      <rect
        x="680"
        y="30"
        width="250"
        height="75"
        stroke="#fff"
        strokeWidth="1"
      >
      </rect>
      <text
        className={classes.text}
        x="705"
        y="80"
      >
        Scrap: {scrap}
      </text>
    </g>
  )
}

export default withStyles(styles)(Scrap)
