import React from 'react'
import withStyles from 'react-jss'

const styles = {
  text: {
    fill: 'white',
    fontSize: '1.3rem',
    userSelect: 'none',
  }
}

const NextButton = (props) => {

  function handleClick() {
    document.getElementById('id01').style.display = 'block'
  }

  const { classes } = props
  return (
    <g>
      <rect
        x="680"
        y="50"
        width="300"
        height="75"
        onClick={handleClick}
        stroke="#fff"
        strokeWidth="1"
      >
      </rect>
      <text
        className={classes.text}
        x="700"
        y="100"
        onClick={handleClick}
      >
        I'm a button.
      </text>
    </g>
  )
}

export default withStyles(styles)(NextButton)
