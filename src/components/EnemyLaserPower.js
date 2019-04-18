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

const EnemyLaserPower = (props) => {

  const enemyLasers = []
  for (let i = 0; i < props.enemyLasers; i++) {
    enemyLasers.push(
      <rect
        width="40"
        height="10"
        x="1430"
        y={1000 - 15 * i}
        fill="#f00"
        strokeWidth="1.5"
        stroke="#fff"
        key={i}
      />
    )
  }

  const { classes } = props
  return (
    <React.Fragment>
      {enemyLasers}
      <circle
        r="23"
        cx="1450"
        cy="1040"
        fill="#f00"
        stroke="#000"
        strokeWidth="1"
      />
      <text
        className={classes.text}
        x="1439"
        y="1054"
      >
        L
      </text>
    </React.Fragment>
  )
}

const mapStateToProps = (state) => ({
  enemyLasers: state.enemy.enemyLasers
})

export default connect(mapStateToProps)(withStyles(styles)(EnemyLaserPower))
