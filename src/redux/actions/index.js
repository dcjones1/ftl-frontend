export const NEW_GAME = 'NEW_GAME'
export const RESET_GAME = 'RESET_GAME'
export const LOSE_GAME = 'LOSE_GAME'
export const WIN_GAME = 'WIN_GAME'
export const ACTUALLY_WIN_GAME = 'ACTUALLY_WIN_GAME'
export const TOGGLE_PLAYER_LASER = 'TOGGLE_PLAYER_LASER'
export const PLAYER_LASER_ON = 'PLAYER_LASER_ON'
export const PLAYER_LASER_OFF = 'PLAYER_LASER_OFF'
export const DECREASE_PLAYER_HEALTH = 'DECREASE_PLAYER_HEALTH'
export const INCREASE_PLAYER_HEALTH = 'INCREASE_PLAYER_HEALTH'
export const DECREASE_ENEMY_HEALTH = 'DECREASE_ENEMY_HEALTH'
export const DECREASE_SHIELD = 'DECREASE_SHIELD'
export const INCREASE_SHIELD = 'INCREASE_SHIELD'
export const DECREASE_ENEMY_SHIELD = 'DECREASE_ENEMY_SHIELD'
export const INCREASE_ENEMY_SHIELD = 'INCREASE_ENEMY_SHIELD'
export const INCREASE_SCRAP = 'INCREASE_SCRAP'
export const DECREASE_SCRAP = 'DECREASE_SCRAP'
export const ADD_LASER = 'ADD_LASER'
export const REMOVE_LASER = 'REMOVE_LASER'
export const ENEMY_LASER_ON = 'ENEMY_LASER_ON'
export const ENEMY_LASER_OFF = 'ENEMY_LASER_OFF'
export const FETCH_LEVEL = 'FETCH_LEVEL'
export const BEGIN_LEVEL = 'BEGIN_LEVEL'
export const OPEN_MENU = 'OPEN_MENU'
export const CLOSE_MENU = 'CLOSE_MENU'
export const FIRE_MISSILE = 'FIRE_MISSILE'
export const ADD_ENGINE = 'ADD_ENGINE'
export const REMOVE_ENGINE = 'REMOVE_ENGINE'
export const ADD_MISSILE = 'ADD_MISSILE'
export const ADD_PILOT = 'ADD_PILOT'
export const REMOVE_PILOT = 'REMOVE_PILOT'
export const SET_ENEMY = 'SET_ENEMY'

export const fetchLevel = (level) => {
  return dispatch => {
    fetch(`http://localhost:3000/api/v1/levels/${level}`)
    .then(res => res.json())
    .then(data => {
      dispatch({
        type: FETCH_LEVEL,
        data
      })
      setTimeout(() => {
        dispatch({
          type: SET_ENEMY,
          payload: data.ships[0]
        })
      }, 1000)
    })
  }
}

export const actuallyWinGame = () => ({
  type: ACTUALLY_WIN_GAME
})

export const newGame = () => ({
  type: NEW_GAME
})

export const togglePlayerLaser = () => ({
  type: TOGGLE_PLAYER_LASER
})

export const setPlayerLaserOn = () => ({
  type: PLAYER_LASER_ON
})

export const setPlayerLaserOff = () => ({
  type: PLAYER_LASER_OFF
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

export const setEnemyLaserOn = () => ({
  type: ENEMY_LASER_ON
})

export const setEnemyLaserOff = () => ({
  type: ENEMY_LASER_OFF
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

export const increaseScrap = (amount) => ({
  type: INCREASE_SCRAP,
  amount
})

export const decreaseScrap = (amount) => ({
  type: DECREASE_SCRAP,
  amount
})

export const addLaser = () => ({
  type: ADD_LASER
})

export const removeLaser = () => ({
  type: REMOVE_LASER
})

export const beginLevel = () => ({
  type: BEGIN_LEVEL
})

export const openMenu = () => ({
  type: OPEN_MENU
})

export const closeMenu = () => ({
  type: CLOSE_MENU
})

export const fireMissile = () => ({
  type: FIRE_MISSILE
})

export const addMissile = () => ({
  type: ADD_MISSILE
})

export const addEngine = () => ({
  type: ADD_ENGINE
})

export const removeEngine = () => ({
  type: REMOVE_ENGINE
})

export const addPilot = () => ({
  type: ADD_PILOT
})

export const removePilot = () => ({
  type: REMOVE_PILOT
})
