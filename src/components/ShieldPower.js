import React from 'react'
import withStyles from 'react-jss'

const styles = {
  text: {
    fill: 'black',
    fontSize: '1.6rem',
    userSelect: 'none',
  }
}

const ShieldPower = (props) => {
  const { classes } = props
  return (
    <React.Fragment>
      <rect
        width="40"
        height="10"
        x="150"
        y="1000"
        // fill="#7CFC00"
        strokeWidth="1.5"
        stroke="#fff"
      />
      <circle
        r="23"
        cx="170"
        cy="1040"
        fill="#7CFC00"
        stroke="#000"
        strokeWidth="1"
      />
      <text
        className={classes.text}
        x="159"
        y="1054"
      >
        S
      </text>
    </React.Fragment>
  )
}

export default withStyles(styles)(ShieldPower)
