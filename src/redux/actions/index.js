export const NEW_GAME = 'NEW_GAME'
export const RESET_GAME = 'RESET_GAME'
export const LOSE_GAME = 'LOSE_GAME'
export const WIN_GAME = 'WIN_GAME'
export const TOGGLE_PLAYER_LASER = 'TOGGLE_PLAYER_LASER'
export const DECREASE_PLAYER_HEALTH = 'DECREASE_PLAYER_HEALTH'
export const INCREASE_PLAYER_HEALTH = 'INCREASE_PLAYER_HEALTH'
export const DECREASE_ENEMY_HEALTH = 'DECREASE_ENEMY_HEALTH'
export const DECREASE_SHIELD = 'DECREASE_SHIELD'
export const INCREASE_SHIELD = 'INCREASE_SHIELD'
export const DECREASE_ENEMY_SHIELD = 'DECREASE_ENEMY_SHIELD'
export const INCREASE_ENEMY_SHIELD = 'INCREASE_ENEMY_SHIELD'
export const DECREASE_SCRAP = 'DECREASE_SCRAP'
export const ADD_WEAPON = 'ADD_WEAPON'
export const TOGGLE_ENEMY_LASER = 'TOGGLE_ENEMY_LASER'

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

export const decreaseEnemyShield = () => ({
  type: DECREASE_ENEMY_SHIELD
})

export const increaseEnemyShield = () => ({
  type: INCREASE_ENEMY_SHIELD
})

export const decreasePlayerHealth = () => ({
  type: DECREASE_PLAYER_HEALTH
})

export const increasePlayerHealth = () => ({
  type: INCREASE_PLAYER_HEALTH
})

export const decreaseEnemyHealth = () => ({
  type: DECREASE_ENEMY_HEALTH
})

export const toggleEnemyLaser = () => ({
  type: TOGGLE_ENEMY_LASER
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

export const decreaseScrap = (amount) => ({
  type: DECREASE_SCRAP,
  amount
})

export const addWeapon = () => ({
  type: ADD_WEAPON
})
