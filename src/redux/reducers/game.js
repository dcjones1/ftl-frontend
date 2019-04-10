import { NEW_GAME, RESET_GAME, LOSE_GAME, WIN_GAME, BEGIN_LEVEL, OPEN_MENU, CLOSE_MENU } from '../actions'

const initialState = {
  playing: false,
  nextLevel: false,
  gameOver: false,
  menuOpen: false,
  currentLevel: 1,
}

export default (state = initialState, action) => {
  switch (action.type) {

    case NEW_GAME:
      return { ...state, playing: true }

    case WIN_GAME:
      return { ...state, nextLevel: true }

    case BEGIN_LEVEL:
      return { ...state,
        nextLevel: false,
        currentLevel: state.currentLevel + 1
      }

    case OPEN_MENU:
      return { ...state, menuOpen: true }

    case CLOSE_MENU:
      return { ...state, menuOpen: false }

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
