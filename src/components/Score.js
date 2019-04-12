import React from 'react'
import { connect } from 'react-redux'
import withStyles from 'react-jss'

const styles = {
  text: {
    fill: 'white',
    fontSize: '1.7rem',
    userSelect: 'none',
  }
}

const Score = (props) => {
  const { classes, score } = props
  return (
    <g>
      <rect
        x="1560"
        y="30"
        width="330"
        height="70"
        stroke="#fff"
        strokeWidth="1"
      >
      </rect>
      <text
        className={classes.text}
        x="1575"
        y="80"
      >
        Score: {score}
      </text>
    </g>
  )
}

const mapStateToProps = (state) => ({
  score: state.game.score
})

export default connect(mapStateToProps)(withStyles(styles)(Score))
