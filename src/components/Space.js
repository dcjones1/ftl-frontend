import React from 'react'
import withStyles from 'react-jss'

const styles = {
  space: {
    // fill: '#3f3f3f'
    fill: '#000'
  }
}

const Space = (props) => {
  const { classes } = props
  return (
    <rect
      className={classes.space}
      x={0}
      y={0}
      height="1080"
      width="1920"
      // x={-960}
      // y={-540}
      // height="2160"
      // width="3840"
    />
  )
}

export default withStyles(styles)(Space)
