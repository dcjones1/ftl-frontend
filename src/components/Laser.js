import React from 'react'
import withStyles from 'react-jss'

const styles = {
  laser: {}
}

const Laser = (props) => {
  const { classes } = props
  return (
    <ellipse
      id="laser"
      className={classes.laser}
      stroke="#000000"
      // ry="0.778"
      ry="1"
      rx="14.5"
      // cx="300"
      // cy="130"
      cx={props.position.x}
      cy={props.position.y}
      stroke-width="0.2"
      fill="#0eed79"
    >
      {props.playerLaserOn && (
        <animateMotion
          // xlinkHref="#my-circle"
          // path="M0,0 L500,90"
          path={props.path}
          dur="4s"
          begin="0.5s"
          fill="remove"
          repeatCount="indefinite"
        />
      )}
      {/* <animate
        // xlinkHref="#my-circle"
        attributeName="cx"
        from="300"
        to="900"
        dur="2s"
        begin="2s"
        fill="remove"
        repeatCount="indefinite"
      /> */}
    </ellipse>
  )
}

export default withStyles(styles)(Laser)
