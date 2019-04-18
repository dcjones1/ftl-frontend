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

const PilotPower = (props) => {

  // const pilots = []
  // for (let i = 0; i < props.pilotLevel; i++) {
  //   pilots.push(
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

  const { classes } = props
  return (
    <React.Fragment>
      {/* {pilots} */}
      <circle
        r="23"
        cx="370"
        cy="990"
        fill="#7CFC00"
        stroke="#000"
        strokeWidth="1"
      />
      <text
        className={classes.text}
        x="359"
        y="1004"
      >
        P
      </text>
    </React.Fragment>
  )
}

const mapStateToProps = (state) => ({
  pilotLevel: state.player.pilotLevel
})

export default connect(mapStateToProps)(withStyles(styles)(PilotPower))
