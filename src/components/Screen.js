import React from 'react'
import Space from './Space'
import Star from './Star'
import HealthBar from './HealthBar'
import Health from './Health'
import WeaponBar from './WeaponBar'
import Weapon from './Weapon'
import Kestrel from './Kestrel'
// import Kestrel2 from './Kestrel2'
import EnemyShip from './EnemyShip'
import Power from './Power'
import Shield from './Shield'
import Laser from './Laser'
import EnemyLaser from './EnemyLaser'
import NextButton from './NextButton'
import { togglePlayerLaser } from '../redux/actions'
import { connect } from 'react-redux'
import withStyles from 'react-jss'

const styles = {
  fill: {
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
  }
}

const Screen = (props) => {

  const stars = []
  for(let i = 0; i < 800; i++) {
    const starPosition = {
      x: Math.floor(Math.random() * 1920),
      y: Math.floor(Math.random() * 1080),
    }
    stars.push(<Star key={i} position={starPosition} />)
  }


  const power = []
  for(let i = 0; i < props.power; i++) {
    const powerPosition = {
      x: 20,
      y: 1040 - i * 15,
    }
    power.push(<Power key={i} position={powerPosition} />)
  }


  const health = []
  for(let i = 0; i < props.health; i++) {
    const healthPosition = {
      x: 34 + i * 13.2,
      y: 39,
    }
    health.push(<Health key={i} position={healthPosition} />)
  }

  const enemyHealth = []
  for(let i = 0; i < props.enemyHealth; i++) {
    const healthPosition = {
      x: 605 + i * 13.3,
      y: 509,
    }
    enemyHealth.push(<Health key={i} position={healthPosition} />)
  }

  const weapons = []
  for(let i = 0; i < props.weapons; i++) {
    const weaponPosition = {
      x: 160 + i * 145,
      y: 830,
    }
    weapons.push(<Weapon key={i} position={weaponPosition} togglePlayerLaser={props.togglePlayerLaser} />)
  }

  const lasers = []
  for(let i = 0; i < props.lasers; i++) {
    const laserPosition = {
      x: 250,
      y: 128 + i * 200,
    }
    lasers.push(<Laser key={i} position={laserPosition} playerLaserOn={props.playerLaserOn} />)
  }

  const enemyLasers = []
  if (props.enemyAlive) {
    for(let i = 0; i < props.enemyLasers; i++) {
      const laserPosition = {
        x: 775,
        y: 161 + i * 150,
      }
      enemyLasers.push(<EnemyLaser key={i} position={laserPosition} />)
    }
  }

  const { classes } = props
  return (
    <svg
      className={classes.fill}
      viewBox={'0 0 1920 1080'}
      preserveAspectRatio="xMidYMid"
    >
      <Space />
      {stars}

      {(props.shield > 0) ? (
        <Shield show={true} />
      ) : (
        <Shield show={false} />
      )}

      {lasers}
      {enemyLasers}

      <Kestrel />
      {/* <Kestrel2 /> */}
      <EnemyShip />

      {power}

      <HealthBar player={true} />
      {health}

      <HealthBar />
      {enemyHealth}

      <WeaponBar />
      {weapons}


      <NextButton />


    </svg>
  )
}

const mapStateToProps = (state) => ({
  // prop: the equiv state
  playing: state.game.playing,
  stars: state.game.stars,
  power: state.player.power,
  health: state.player.health,
  weapons: state.player.weapons,
  lasers: state.player.lasers,
  shield: state.player.shield,
  playerAlive: state.player.playerAlive,
  playerLaserOn: state.player.playerLaserOn,
  enemyLasers: state.enemy.enemyLasers,
  enemyHealth: state.enemy.enemyHealth,
  enemyAlive: state.enemy.enemyAlive,
})

const mapDispatchToProps = {
  togglePlayerLaser
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Screen))
