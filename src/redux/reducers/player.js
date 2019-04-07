import { TOGGLE_PLAYER_LASER, DECREASE_PLAYER_HEALTH, RESET_GAME, LOSE_GAME, DECREASE_SHIELD, INCREASE_SHIELD } from '../actions'

const initialState = {
  health: 30,
  weapons: 1,
  lasers: 1,
  shield: 1,
  playerLaserOn: false,
  playerAlive: true,
}

export default (state = initialState, action) => {
  switch (action.type) {

    case TOGGLE_PLAYER_LASER:
      return { ...state, playerLaserOn: !state.playerLaserOn }

    case DECREASE_SHIELD:
      return { ...state, shield: state.shield - 1 }

    case INCREASE_SHIELD:
      return { ...state, shield: state.shield + 1 }

    case DECREASE_PLAYER_HEALTH:
      return { ...state, health: state.health }

    case LOSE_GAME:
      return { ...state, playerAlive: false}

    case RESET_GAME:
      return initialState

    default:
      return state

  }
}
