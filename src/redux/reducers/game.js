import { NEW_GAME, RESET_GAME, LOSE_GAME, WIN_GAME, ACTUALLY_WIN_GAME, BEGIN_LEVEL, OPEN_MENU, CLOSE_MENU } from '../actions'

const initialState = {
  playing: true,
  nextLevel: false,
  gameOver: false,
  menuOpen: false,
  currentLevel: 1,
  gameWon: false,
  score: 0,
}

export default (state = initialState, action) => {
  switch (action.type) {

    case NEW_GAME:
      return { ...state, playing: true }

    case WIN_GAME:
      let score = state.score + state.currentLevel * Math.floor(Math.random() * 221 ) * 3
      return { ...state,
        nextLevel: true,
        currentLevel: state.currentLevel + 1,
        score: Math.floor(score)
    }

    case ACTUALLY_WIN_GAME:
      let final = state.score + state.currentLevel * Math.floor(Math.random() * 554) * 5
      return { ...state,
        gameWon: true,
        gameOver: true,
        score: Math.floor(final)
      }

    case BEGIN_LEVEL:
      return { ...state,
        nextLevel: false,
        // currentLevel: state.currentLevel + 1
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
