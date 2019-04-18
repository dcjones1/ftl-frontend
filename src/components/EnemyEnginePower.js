import React from 'react'
import { connect } from 'react-redux'
import withStyles from 'react-jss'

const styles = {
  text: {
    fill: 'black',
    fontSize: '1.6rem',
    userSelect: 'none',
  },
  evade: {
    fill: 'white',
    fontSize: '1.2rem',
    userSelect: 'none',
  }
}

const EnemyEnginePower = (props) => {

  // const engines = []
  // for (let i = 0; i < props.engineLevel; i++) {
  //   engines.push(
  //     <rect
  //       width="40"
  //       height="10"
  //       x="50"
  //       y={1000 - 15 * i}
  //       fill="#7CFC00"
  //       strokeWidth="1.5"
  //       stroke="#fff"
  //       key={i}
  //     />
  //   )
  // }

  const { classes, enemyEngineLevel, enemyPilotLevel } = props
  return (
    <React.Fragment>
      {/* {engines} */}
      <circle
        r="23"
        cx="1550"
        cy="1040"
        fill="#f00"
        stroke="#000"
        strokeWidth="1"
      />
      <text
        className={classes.text}
        x="1539"
        y="1054"
      >
        E
      </text>
      <text
        className={classes.evade}
        x="1585"
        y="1054"
      >
        {`${(enemyEngineLevel + enemyPilotLevel) * 3}% evasion`}
      </text>
    </React.Fragment>
  )
}

const mapStateToProps = (state) => ({
  enemyEngineLevel: state.enemy.enemyEngineLevel,
  enemyPilotLevel: state.enemy.enemyPilotLevel
})

export default connect(mapStateToProps)(withStyles(styles)(EnemyEnginePower))
