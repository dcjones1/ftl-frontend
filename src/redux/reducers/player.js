import { TOGGLE_PLAYER_LASER, DECREASE_SCRAP, DECREASE_PLAYER_HEALTH, INCREASE_PLAYER_HEALTH, RESET_GAME, LOSE_GAME, WIN_GAME, DECREASE_SHIELD, INCREASE_SHIELD, ADD_WEAPON } from '../actions'

const initialState = {
  health: 30,
  scrap: 200,
  power: 6,
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

    case DECREASE_SCRAP:
      return { ...state, scrap: state.scrap - action.amount }

    case DECREASE_SHIELD:
      return { ...state, shield: state.shield - 1 }

    case INCREASE_SHIELD:
      return { ...state, shield: state.shield + 1 }

    case ADD_WEAPON:
      return { ...state, lasers: state.lasers + 1 }

    case DECREASE_PLAYER_HEALTH:
      return { ...state, health: state.health - 1 }

    case INCREASE_PLAYER_HEALTH:
      return { ...state, health: state.health + 1 }

    case LOSE_GAME:
      return { ...state, playerAlive: false}

    case WIN_GAME:
      return { ...state,
        health: state.health + 1,
        scrap: state.scrap + 25
      }

    case RESET_GAME:
      return initialState

    default:
      return state

  }
}
