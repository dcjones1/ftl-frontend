export const NEW_GAME = 'NEW_GAME'
export const RESTORE_GAME = 'RESTORE_GAME'
export const TOGGLE_PLAYER_LASER = 'TOGGLE_PLAYER_LASER'
export const DECREASE_PLAYER_HEALTH = 'DECREASE_PLAYER_HEALTH'
export const DECREASE_ENEMY_HEALTH = 'DECREASE_ENEMY_HEALTH'


export const newGame = () => {
  return {
    type: NEW_GAME
  }
}

export const togglePlayerLaser = () => ({
  type: TOGGLE_PLAYER_LASER
})

export const decreasePlayerHealth = () => ({
  type: DECREASE_PLAYER_HEALTH
})

export const decreaseEnemyHealth = () => ({
  type: DECREASE_ENEMY_HEALTH
})
