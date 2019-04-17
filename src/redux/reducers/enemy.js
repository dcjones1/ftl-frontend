import { ENEMY_LASER_ON, ENEMY_LASER_OFF, DECREASE_ENEMY_HEALTH, RESET_GAME, WIN_GAME, DECREASE_ENEMY_SHIELD, INCREASE_ENEMY_SHIELD, BEGIN_LEVEL, SET_ENEMY } from '../actions'

const initialState = {
  enemyHealth: 9,
  enemyPilotLevel: 1,
  enemyLasers: 1,
  enemyEngineLevel: 1,
  enemyAlive: true,
  enemyLaserOn: true,
  enemyShield: 1,
}

export default (state = initialState, action) => {
  switch (action.type) {

    case SET_ENEMY:
    console.log(action.payload.shields)
      return { ...state,
        enemyHealth: action.payload.health,
        enemyEngineLevel: action.payload.engineLevel,
        enemyPilotLevel: action.payload.pilotLevel,
        enemyShield: action.payload.shields,
        enemyLasers: action.payload.weapons[0].shots,
      }

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
        enemyLaserOn: false,
      }

    case BEGIN_LEVEL:
      return { ...state, enemyLaserOn: true }

    case RESET_GAME:
      return initialState

    default:
      return state

  }
}
