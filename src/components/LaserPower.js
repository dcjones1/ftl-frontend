import React from 'react'
import { connect } from 'react-redux'
import withStyles from 'react-jss'

const styles = {
  text: {
    fill: 'black',
    fontSize: '1.6rem',
    userSelect: 'none',
  }
}

const LaserPower = (props) => {

  const lasers = []
  for (let i = 0; i < props.lasers; i++) {
    lasers.push(
      <rect
        width="40"
        height="10"
        x="100"
        y={1000 - 15 * i}
        fill="#7CFC00"
        strokeWidth="1.5"
        stroke="#fff"
        key={i}
      />
    )
  }

  const { classes } = props
  return (
    <React.Fragment>
      {lasers}
      <circle
        r="23"
        cx="120"
        cy="1040"
        fill="#7CFC00"
        stroke="#000"
        strokeWidth="1"
      />
      <text
        className={classes.text}
        x="109"
        y="1054"
      >
        L
      </text>
    </React.Fragment>
  )
}

const mapStateToProps = (state) => ({
  lasers: state.player.lasers
})

export default connect(mapStateToProps)(withStyles(styles)(LaserPower))
