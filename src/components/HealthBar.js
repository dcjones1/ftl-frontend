import React from 'react'
import withStyles from 'react-jss'

const styles = {
  text: {
    fill: 'white',
    fontSize: '1.3rem',
    userSelect: 'none',
  }
}

const HealthBar = (props) => {
  const { classes } = props
  if (props.player) {
    return (
      <g>
        <text
          className={classes.text}
          x="30"
          y="30"
        >
          Health
        </text>
        <rect
          width="400"
          height="40"
          x="30"
          y="35"
          fill="#000000"
          stroke="#fff"
          strokeWidth="1"
        />
      </g>
    )
  } else {
    return (
     <g>
       <text
         className={classes.text}
         x="1200"
         y="30"
       >
         Enemy Health
       </text>
       <rect
         width="300"
         height="40"
         x="1200"
         y="35"
         fill="#000000"
         stroke="#fff"
         strokeWidth="1"
       />
     </g>
   )
 }
}

export default withStyles(styles)(HealthBar)
