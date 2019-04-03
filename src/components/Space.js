import React from 'react'
import { gameHeight, spaceWidth } from '../helpers/constants'
import withStyles from 'react-jss'

const styles = {
  space: {
    fill: '#3f3f3f'
  }
}

const Space = (props) => {
  const { classes } = props
  return (
    <rect
      className={classes.space}
      x={0}
      y={0}
      height={gameHeight}
      width={spaceWidth}
    />
  )
}

export default withStyles(styles)(Space)
