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

const EnginePower = (props) => {

  const shields = []
  for (let i = 0; i < props.engineLevel; i++) {
    engineLevel.push(
      <rect
        width="40"
        height="10"
        x="150"
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
      {engineLevel}
      <circle
        r="23"
        cx="170"
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
    </React.Fragment>
  )
}

const mapStateToProps = (state) => ({
  engineLevel: state.player.engineLevel
})

export default connect(mapStateToProps)(withStyles(styles)(EnginePower))
