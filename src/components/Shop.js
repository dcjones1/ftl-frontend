import React from 'react'
import { connect } from 'react-redux'
import { increasePlayerHealth, decreaseScrap, addLaser, setEnemyLaserOn, increaseShield, closeMenu, addMissile, addEngine, addPilot } from '../redux/actions'
import swal from 'sweetalert'
import withStyles from 'react-jss'

const styles = {
    modal: {
    display: 'none',
    position: 'relative',
    zIndex: 1,
    top: '15%',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '85%',
    height: '70%',
    overflow: 'auto',
    border: '1px solid white',
    backgroundColor: 'rgba(0,0,0,0.9)',
    '&:hover': {
      color: 'black',
      textDecoration: 'none',
    },
    '&:focus': {
      color: 'black',
      textDecoration: 'none',
    },
  },
  'modalContent': {
    backgroundColor: '#fefefe',
    margin: '5% auto',
    padding: '20px',
    border: '1px solid #888',
    width: '80%',
    height: '80%',
    overflow: 'auto'
  },
  close: {
    color: '#aaa',
    float: 'right',
    fontSize: '28px',
    fontWeight: 'bold',
  },
  info: {
    textAlign: 'center',
  },
  container: {
    display: 'flex',
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  button: {
    backgroundColor: '#4CAF50',
    border: 'none',
    color: 'white',
    height: '3rem',
    width: '70%',
    marginBottom: '3%',
    textAlign: 'center',
    textDecoration: 'none',
    display: 'block',
    fontSize: '1rem',
    '&:hover': {
      cursor: 'pointer'
    },
  }
}

const Shop = (props) => {

  function handleClick() {
    props.setEnemyLaserOn()
    props.closeMenu()
    document.getElementById('shop').style.display = 'none'
  }

  function buyHealth() {
    if (props.health < 30 && props.scrap >= 10) {
      props.increasePlayerHealth()
      props.decreaseScrap(10)
    } else if (props.health === 30) {
      swal('hey your health is full')
    } else {
      swal('not enough scrap!')
    }
  }

  function buyLaser() {
    if (props.scrap >= 50) {
      props.addLaser()
      props.decreaseScrap(50)
    } else {
      swal('not enough scrap!')
    }
  }

  function buyShield() {
    if (props.scrap >= 100) {
      props.increaseShield()
      props.decreaseScrap(100)
    } else {
      swal('not enough scrap!')
    }
  }

  function buyEngine() {
    if (props.scrap >= 50) {
      props.addEngine()
      props.decreaseScrap(50)
    } else {
      swal('not enough scrap!')
    }
  }

  function buyMissile() {
    if (props.scrap >= 50) {
      props.addMissile()
      props.decreaseScrap(25)
    } else {
      swal('not enough scrap!')
    }
  }

  function buyPilot() {
    if (props.scrap >= 50) {
      props.addPilot()
      props.decreaseScrap(50)
    } else {
      swal('not enough scrap!')
    }
  }


  const { classes } = props
  return (
    <div id="shop" className={classes.modal}>
      <div className={classes.modalContent}>
        <span className={classes.close} onClick={handleClick}>&times;</span>
        <div className={classes.info}>
          <p>
            Scrap: {props.scrap} Health: {props.health}
          </p>
        </div>
        <div className={classes.container}>
          <button
            className={classes.button}
            onClick={buyHealth}
          >
            Buy Health: 10 scrap
          </button>
          <button
            className={classes.button}
            onClick={buyMissile}
          >
            Buy Missile: 25 scrap
          </button>
          <button
            className={classes.button}
            onClick={buyShield}
          >
            Upgrade Shield: 100 scrap
          </button>
          <button
            className={classes.button}
            onClick={buyLaser}
          >
            Upgrade Laser: 50 scrap
          </button>
          <button
            className={classes.button}
            onClick={buyEngine}
          >
            Upgrade Engine: 50 scrap
          </button>
          <button
            className={classes.button}
            onClick={buyPilot}
          >
            Upgrade Pilot: 50 scrap
          </button>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  health: state.player.health,
  scrap: state.player.scrap
})

const mapDispatchToProps = {
  increasePlayerHealth,
  decreaseScrap,
  addLaser,
  setEnemyLaserOn,
  increaseShield,
  closeMenu,
  addEngine,
  addMissile,
  addPilot,
}


export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Shop))
