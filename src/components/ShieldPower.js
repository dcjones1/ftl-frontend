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

const ShieldPower = (props) => {

  const shields = []
  for (let i = 0; i < props.shield; i++) {
    shields.push(
      <rect
        width="40"
        height="10"
        x="300"
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
      {shields}
      <circle
        r="23"
        cx="320"
        cy="1040"
        fill="#7CFC00"
        stroke="#000"
        strokeWidth="1"
      />
      <text
        className={classes.text}
        x="309"
        y="1054"
      >
        S
      </text>
    </React.Fragment>
  )
}

const mapStateToProps = (state) => ({
  shield: state.player.shield
})

export default connect(mapStateToProps)(withStyles(styles)(ShieldPower))
