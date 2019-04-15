import React from 'react'
import { connect } from 'react-redux'
import { togglePlayerLaser } from '../redux/actions'
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

  function toggleLaser() {
    if (!props.menuOpen) {
      props.togglePlayerLaser()
    }
  }

  const { classes, playerLaserOn } = props
  return (
    <g
      onClick={toggleLaser}
    >
      <rect
        height="140"
        width="140"
        x="760"
        y="910"
        fill="#FFF"
        strokeWidth="1"
        stroke="#000000"
      />
      <foreignObject
        width="140"
        height="140"
        x="765"
        y="910"
      >
        {playerLaserOn ? (
          <p
            className={classes.text}
          >
            Turn<br/>lasers<br/>off
          </p>
        ) : (
          <p
            className={classes.text}
          >
            Turn<br/>lasers<br/>on
          </p>
        )}
      </foreignObject>
    </g>
  )
}

const mapStateToProps = (state) => ({
  playerLaserOn: state.player.playerLaserOn,
  menuOpen: state.game.menuOpen
})

const mapDispatchToProps = {
  togglePlayerLaser
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(LaserButton))
