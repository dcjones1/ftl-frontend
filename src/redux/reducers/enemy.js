import { ENEMY_LASER_ON, ENEMY_LASER_OFF, DECREASE_ENEMY_HEALTH, RESET_GAME, WIN_GAME, DECREASE_ENEMY_SHIELD, INCREASE_ENEMY_SHIELD } from '../actions'

const initialState = {
  enemyHealth: 10,
  enemyLasers: 1,
  enemyAlive: true,
  enemyLaserOn: true,
  enemyShield: 1,
}

export default (state = initialState, action) => {
  switch (action.type) {

    case ENEMY_LASER_ON:
      return { ...state, enemyLaserOn: true }

    case ENEMY_LASER_OFF:
      return { ...state, enemyLaserOn: false }

    case DECREASE_ENEMY_SHIELD:
      return { ...state, enemyShield: state.enemyShield - 1 }

    case INCREASE_ENEMY_SHIELD:
      return { ...state, enemyShield: state.enemyShield + 1 }

    case DECREASE_ENEMY_HEALTH:
      return { ...state, enemyHealth: state.enemyHealth - 1 }

    case WIN_GAME:
      return {
        ...state,
        enemyHealth: 10,
        enemyLasers: state.enemyLasers + 1,
        enemyLaserOn: false,
      }

    case RESET_GAME:
      return initialState

    default:
      return state

  }
}
