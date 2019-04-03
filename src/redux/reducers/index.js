import { NEW_GAME, TOGGLE_PLAYER_LASER } from '../actions'

const initialGameState = {
  health: 30,
  enemyHealth: 10,
  weapons: 1,
  lasers: 2,
  playerLaserOn: false,
  enemyLasers: 2,
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

    default:
      return state
  }
}

export default reducer
