import { DECREASE_ENEMY_HEALTH, RESET_GAME, WIN_GAME } from '../actions'

const initialState = {
  enemyHealth: 10,
  enemyLasers: 1,
  enemyAlive: true,
  enemyLaserOn: false,
}

export default (state = initialState, action) => {
  switch (action.type) {

    case DECREASE_ENEMY_HEALTH:
      return { ...state, enemyHealth: state.enemyHealth - 1 }

      case WIN_GAME:
        return initialState

      case RESET_GAME:
        return initialState

    default:
      return state

  }
}
