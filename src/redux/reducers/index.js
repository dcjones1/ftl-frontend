import { NEW_GAME } from '../actions'



const initialGameState = {
  health: 20,
  weapons: 1,
}

const initialState = {
  playing: false,
  gameState: initialGameState
}


function reducer(state = initialState, action) {
  switch (action.type) {

    case NEW_GAME:
      return { ...state, playing: true }

    default:
      return state
  }
}

export default reducer
