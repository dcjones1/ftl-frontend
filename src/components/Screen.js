import React from 'react'
import Space from './Space'
import Star from './Star'
import HealthBar from './HealthBar'
import Health from './Health'
import WeaponBar from './WeaponBar'
import LaserButton from './LaserButton'
import MissileButton from './MissileButton'
import Kestrel from './Kestrel'
import EnemyShip from './EnemyShip'
import ShieldPower from './ShieldPower'
import LaserPower from './LaserPower'
import EnginePower from './EnginePower'
import PilotPower from './PilotPower'
import Shield from './Shield'
import EnemyShield from './EnemyShield'
import Laser from './Laser'
import EnemyLaser from './EnemyLaser'
import Missile from './Missile'
import Scrap from './Scrap'
import ShopButton from './ShopButton'
import Score from './Score'
import ShipTile from './ShipTile'
import Crew from './Crew'
import { setPlayerLaserOn, setPlayerLaserOff, togglePlayerLaser } from '../redux/actions'
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
      x: 1205 + i * 13.3,
      y: 39,
    }
    enemyHealth.push(<Health key={i} position={healthPosition} />)
  }

  // const weapons = []
  // for(let i = 0; i < props.weapons; i++) {
  //   const weaponPosition = {
  //     x: 760 + i * 150,
  //     y: 910,
  //   }
  //   weapons.push(<Weapon key={i} position={weaponPosition} togglePlayerLaser={props.togglePlayerLaser} />)
  // }

  const lasers = []
  for(let i = 0; i < props.lasers; i++) {
    const laserPosition = {
      x: 850,
      y: 430 + i * 5,
    }
    lasers.push(<Laser key={i} id={i} position={laserPosition} playerLaserOn={props.playerLaserOn} enemyShield={props.enemyShield} />)
  }

  const enemyLasers = []
  if (props.enemyAlive) {
    for(let i = 0; i < props.enemyLasers; i++) {
      let laserPosition
      if (i % 2 === 0) {
        laserPosition = {
          x: 1380,
          y: 362 + i * 10,
        }
      } else {
        laserPosition = {
          x: 1380,
          y: 512 - i * 10,
        }
      }
      enemyLasers.push(<EnemyLaser key={i} id={i} position={laserPosition} enemyLaserOn={props.enemyLaserOn} shield={props.shield} />)
    }
  }

  const missiles = []
  for(let i = 0; i < props.missiles; i++) {
    const missilePosition = {
      x: 390,
      y: 415,
    }
    missiles.push(<Missile key={i} id={i} lastMissile={props.missiles - 1}
      position={missilePosition} />)
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
      {(props.enemyShield > 0) ? (
        <EnemyShield show={true} />
      ) : (
        <EnemyShield show={false} />
      )}

      <WeaponBar />
      <LaserButton />
      <MissileButton />

      {lasers}
      {enemyLasers}
      {missiles}

      <Kestrel />
      <EnemyShip />

      <LaserPower />
      <ShieldPower />
      <EnginePower />
      <PilotPower />

      <HealthBar player={true} />
      {health}

      <HealthBar />
      {enemyHealth}


      <Scrap scrap={props.scrap} />
      <ShopButton />

      <Score />

      <ShipTile position={{ x: 290, y: 355 }} id={1} />
      <ShipTile position={{ x: 355, y: 355 }} id={2} />
      <ShipTile position={{ x: 420, y: 355 }} id={'s'} letter={'s'} />
      <ShipTile position={{ x: 485, y: 355 }} id={3} />
      <ShipTile position={{ x: 550, y: 355 }} id={4} />

      <ShipTile position={{ x: 290, y: 420 }} id={'e'} letter={'e'}  />
      <ShipTile position={{ x: 355, y: 420 }} id={5} />
      <ShipTile position={{ x: 420, y: 420 }} id={6} />
      <ShipTile position={{ x: 485, y: 420 }} id={7} />
      <ShipTile position={{ x: 550, y: 420 }} id={8} />
      <ShipTile position={{ x: 550, y: 420 }} id={9} />
      <ShipTile position={{ x: 615, y: 420 }} id={10} />
      <ShipTile position={{ x: 680, y: 420 }} id={'p'} letter={'p'} />

      <ShipTile position={{ x: 290, y: 485 }} id={11} />
      <ShipTile position={{ x: 355, y: 485 }} id={12} />
      <ShipTile position={{ x: 420, y: 485 }} id={'l'} letter={'l'} />
      <ShipTile position={{ x: 485, y: 485 }} id={13} />
      <ShipTile position={{ x: 550, y: 485 }} id={14} />

      <Crew position={{ x: 710, y: 450 }}/>
    </svg>
  )
}

const mapStateToProps = (state) => ({
  // prop: the equiv state
  playing: state.game.playing,
  scrap: state.player.scrap,
  health: state.player.health,
  weapons: state.player.weapons,
  lasers: state.player.lasers,
  missiles: state.player.missiles,
  shield: state.player.shield,
  playerAlive: state.player.playerAlive,
  playerLaserOn: state.player.playerLaserOn,
  enemyLasers: state.enemy.enemyLasers,
  enemyHealth: state.enemy.enemyHealth,
  enemyAlive: state.enemy.enemyAlive,
  enemyLaserOn: state.enemy.enemyLaserOn,
  enemyShield: state.enemy.enemyShield,
})

const mapDispatchToProps = {
  togglePlayerLaser,
  setPlayerLaserOn,
  setPlayerLaserOff
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Screen))
