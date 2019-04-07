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
    console.log('click')
    document.getElementById('id01').style.display = 'block'
  }

  const { classes } = props
  return (
    <g>
      <rect
        x="1180"
        y="100"
        width="300"
        height="75"
        onClick={handleClick}
      >
      </rect>
      <text
        className={classes.text}
        x="1200"
        y="150"
        onClick={handleClick}
      >
        I'm a button.
      </text>
    </g>
  )
}

export default withStyles(styles)(NextButton)
