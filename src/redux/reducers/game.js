import { NEW_GAME, RESET_GAME, LOSE_GAME } from '../actions'

const initialState = {
  playing: true,
  gameOver: false,
  stars: 100,
}

export default (state = initialState, action) => {
  switch (action.type) {

    case NEW_GAME:
      return { ...state, playing: true }

    case LOSE_GAME:
      return {
      ...state,
      playing: false,
      gameOver: true
    }

    case RESET_GAME:
      return initialState

    default:
      return state
  }
}
