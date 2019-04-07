import { combineReducers } from 'redux'
import enemy from './enemy'
import game from './game'
import player from './player'

const rootReducer = combineReducers({
  enemy,
  game,
  player
})

export default rootReducer
