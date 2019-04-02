import React from 'react'
import Space from './Space'
import HealthBar from './HealthBar'
import Health from './Health'
import WeaponBar from './WeaponBar'
import Weapon from './Weapon'
import Kestrel from './Kestrel'
import EnemyShip from './EnemyShip'
import Laser from './Laser'
import { gameHeight } from '../helpers/constants'

const Screen = (props) => {
  const viewBox = [window.innerWidth / -2, 100 - gameHeight, window.innerWidth, gameHeight]


  const health = []
  for(let i = 0; i < props.health; i++) {
    const healthPosition = {
      x: 31 + i * 13.3,
      y: 39,
    }
    health.push(<Health key={i} position={healthPosition} />)
  }

  const weapons = []
  for(let j = 0; j < props.weapons; j++) {
    const weaponPosition = {
      x: 160 + j * 145,
      y: 820,
    }
    weapons.push(<Weapon key={j} position={weaponPosition} />)
  }

  return (
    <svg
      preserveAspectRatio="xMaxYMax"
      // viewBox={viewBox}
      height={window.innerHeight}
      width={window.innerWidth}
    >
      <Space />
      <Kestrel />
      <EnemyShip />
      <HealthBar />
      {health}

      <WeaponBar />
      {weapons}





      {/* will be an array of lasers as they fire */}
      <Laser />




    </svg>
  )
}

export default Screen
