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

const EnginePower = (props) => {

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

  const { classes, engineLevel, pilotLevel } = props
  return (
    <React.Fragment>
      {/* {engines} */}
      <circle
        r="23"
        cx="220"
        cy="1040"
        fill="#7CFC00"
        stroke="#000"
        strokeWidth="1"
      />
      <text
        className={classes.text}
        x="209"
        y="1054"
      >
        E
      </text>
      <text
        className={classes.evade}
        x="255"
        y="1054"
      >
        {`${(engineLevel + pilotLevel) * 3}% evasion`}
      </text>
    </React.Fragment>
  )
}

const mapStateToProps = (state) => ({
  engineLevel: state.player.engineLevel,
  pilotLevel: state.player.pilotLevel
})

export default connect(mapStateToProps)(withStyles(styles)(EnginePower))
