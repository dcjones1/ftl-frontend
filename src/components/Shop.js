import React from 'react'
import { connect } from 'react-redux'
import { increasePlayerHealth, decreaseScrap, addWeapon, toggleEnemyLaser, togglePlayerLaser } from '../redux/actions'
import withStyles from 'react-jss'

const styles = {
    modal: {
    display: 'none',
    position: 'relative',
    zIndex: 1,
    top: '25%',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '85%',
    height: '50%',
    overflow: 'auto',
    border: '1px solid white',
    backgroundColor: 'rgba(0,0,0,0.9)',
    '&:hover': {
      color: 'black',
      textDecoration: 'none',
      cursor: 'pointer',
    },
    '&:focus': {
      color: 'black',
      textDecoration: 'none',
      cursor: 'pointer',
    },
  },
  'modalContent': {
    backgroundColor: '#fefefe',
    margin: '7% auto',
    padding: '20px',
    border: '1px solid #888',
    width: '80%',
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
  }
}

const Shop = (props) => {
  function handleClick() {
    props.toggleEnemyLaser()
    props.togglePlayerLaser()
    document.getElementById('id01').style.display = 'none'
  }

  function buyHealth() {
    if (props.health < 30 && props.scrap > 10) {
      props.increasePlayerHealth()
      props.decreaseScrap(10)
    } else if (props.health === 30) {
      window.alert('hey your health is full')
    } else {
      window.alert('not enough scrap!')
    }
  }

  function buyWeapon() {
    if (props.scrap > 50) {
      props.addWeapon()
      props.decreaseScrap(50)
    } else {
      window.alert('not enough scrap!')
    }
  }


  const { classes } = props
  return (
    <div id="id01" className={classes.modal}>
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
          {/* <button
            className={classes.button}
            >
            Upgrade Shield: 100 scrap
          </button> */}
          <button
            className={classes.button}
            onClick={buyWeapon}
          >
            Upgrade Weapon: 50 scrap
          </button>
          {/* <button
            className={classes.button}
            >
            Upgrade Engine: 75 scrap
          </button> */}
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
  addWeapon,
  toggleEnemyLaser,
  togglePlayerLaser
}


export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Shop))
