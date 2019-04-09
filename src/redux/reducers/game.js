import { NEW_GAME, RESET_GAME, LOSE_GAME, WIN_GAME, BEGIN_LEVEL } from '../actions'

const initialState = {
  playing: true,
  nextLevel: false,
  gameOver: false,
}

export default (state = initialState, action) => {
  switch (action.type) {

    case NEW_GAME:
      return { ...state, playing: true }

    case WIN_GAME:
      return { ...state, nextLevel: true }

    case BEGIN_LEVEL:
      return { ...state, nextLevel: false }

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
