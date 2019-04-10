import { FETCH_LEVEL } from '../actions'

const initialState = {
  title: '',
  story: '',
  choices: [],
  consequence: ''
}

export default (state = initialState, action) => {
  switch (action.type) {

    case FETCH_LEVEL:
      return { ...state,
        title: action.data.title,
        story: action.data.story,
        choices: action.data.choices,
        consequence: action.data.consequence
      }

    default:
      return state
  }
}
