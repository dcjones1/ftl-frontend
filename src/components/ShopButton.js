import React from 'react'
import { connect } from 'react-redux'
import { setEnemyLaserOff, setPlayerLaserOff } from '../redux/actions'
import withStyles from 'react-jss'

const styles = {
  text: {
    fill: 'white',
    fontSize: '1.3rem',
    userSelect: 'none',
  }
}

const ShopButton = (props) => {

  function handleClick() {
    props.setPlayerLaserOff()
    props.setEnemyLaserOff()
    document.getElementById('shop').style.display = 'block'
  }

  const { classes } = props
  return (
    <g>
      <rect
        x="980"
        y="30"
        width="130"
        height="75"
        onClick={handleClick}
        stroke="#fff"
        strokeWidth="1"
      >
      </rect>
      <text
        className={classes.text}
        x="1005"
        y="80"
        onClick={handleClick}
      >
        Shop
      </text>
    </g>
  )
}

const mapDispatchToProps = {
  setEnemyLaserOff,
  setPlayerLaserOff
}

export default connect(null, mapDispatchToProps)(withStyles(styles)(ShopButton))
