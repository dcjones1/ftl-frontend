import { NEW_GAME, TOGGLE_PLAYER_LASER, DECREASE_PLAYER_HEALTH, DECREASE_ENEMY_HEALTH } from '../actions'

const initialGameState = {
  health: 30,
  enemyHealth: 10,
  weapons: 1,
  lasers: 1,
  playerLaserOn: false,
  enemyLasers: 1,
  playerAlive: true,
  enemyAlive: true,
}

const initialState = {
  playing: false,
  gameState: initialGameState
}

function reducer(state = initialState, action) {
  switch (action.type) {

    case NEW_GAME:
      return { ...state, playing: true }

    case TOGGLE_PLAYER_LASER:
      return {
        ...state,
        gameState: {
          ...state.gameState,
          playerLaserOn: !state.gameState.playerLaserOn
        }
      }

    case DECREASE_PLAYER_HEALTH:
      return {
        ...state,
        gameState: {
          ...state.gameState,
          health: state.gameState.health - 1
        }
      }

    case DECREASE_ENEMY_HEALTH:
      return {
        ...state,
        gameState: {
          ...state.gameState,
          enemyHealth: state.gameState.enemyHealth - 1
        }
      }

    default:
      return state
  }
}

export default reducer
