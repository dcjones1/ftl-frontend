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

const EnemyShieldPower = (props) => {

  const enemyShields = []
  for (let i = 0; i < props.enemyShield; i++) {
    enemyShields.push(
      <rect
        width="40"
        height="10"
        x="1480"
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
      {enemyShields}
      <circle
        r="23"
        cx="1500"
        cy="1040"
        fill="#f00"
        stroke="#000"
        strokeWidth="1"
      />
      <text
        className={classes.text}
        x="1489"
        y="1054"
      >
        S
      </text>
    </React.Fragment>
  )
}

const mapStateToProps = (state) => ({
  enemyShield: state.enemy.enemyShield
})

export default connect(mapStateToProps)(withStyles(styles)(EnemyShieldPower))
