import React from 'react'
import withStyles from 'react-jss'

const styles = {
  shield: {
    margin: '0'
  }
}


const Shield = (props) => {
  const { show, classes } = props
  let x, y
  if (show) {
    x = "280"
    y = "230"
  } else {
    x = "-1000"
    y = "-1000"
  }
  return (
    <ellipse
      id="shield"
      // className={classes.laser}
      stroke="#000000"
      rx="210"
      ry="140"
      cx={x}
      cy={y}
      fillOpacity=".35"
      strokeWidth="1"
      fill="#75d7ff"
    />
  )
}

export default Shield
