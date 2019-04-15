import React from 'react'
import { connect } from 'react-redux'
import withStyles from 'react-jss'

const styles = {
  text: {
    fill: 'black',
    fontSize: '1.1rem',
    wordWrap: 'break-word',
    userSelect: 'none',
    lineHeight: 1.5,
  }
}

const LaserButton = (props) => {

  const { classes, missiles } = props
  return (
    <g
      id="missileBtn"
    >
      <rect
        height="140"
        width="140"
        x="910"
        y="910"
        fill="#FFF"
        strokeWidth="1"
        stroke="#000000"
      />
      <foreignObject
        width="143"
        height="140"
        x="911"
        y="900"
      >
        <p
          className={classes.text}
        >
          Missiles<br/>left: {missiles}<br/>Click to fire
        </p>
      </foreignObject>
    </g>
  )
}

const mapStateToProps = (state) => ({
  missiles: state.player.missiles
})

export default connect(mapStateToProps)(withStyles(styles)(LaserButton))
