export const NEW_GAME = 'NEW_GAME'
export const RESET_GAME = 'RESET_GAME'
export const LOSE_GAME = 'LOSE_GAME'
export const WIN_GAME = 'WIN_GAME'
export const TOGGLE_PLAYER_LASER = 'TOGGLE_PLAYER_LASER'
export const DECREASE_PLAYER_HEALTH = 'DECREASE_PLAYER_HEALTH'
export const DECREASE_ENEMY_HEALTH = 'DECREASE_ENEMY_HEALTH'
export const DECREASE_SHIELD = 'DECREASE_SHIELD'
export const INCREASE_SHIELD = 'INCREASE_SHIELD'

export const newGame = () => ({
  type: NEW_GAME
})

export const togglePlayerLaser = () => ({
  type: TOGGLE_PLAYER_LASER
})

export const decreaseShield = () => ({
  type: DECREASE_SHIELD
})

export const increaseShield = () => ({
  type: INCREASE_SHIELD
})

export const decreasePlayerHealth = () => ({
  type: DECREASE_PLAYER_HEALTH
})

export const decreaseEnemyHealth = () => ({
  type: DECREASE_ENEMY_HEALTH
})

export const resetGame = () => ({
  type: RESET_GAME
})

export const loseGame = () => ({
  type: LOSE_GAME
})

export const winGame = () => ({
  type: WIN_GAME
})
