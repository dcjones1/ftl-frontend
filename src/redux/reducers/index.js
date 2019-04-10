import { combineReducers } from 'redux'
import enemy from './enemy'
import game from './game'
import player from './player'
import story from './story'

const rootReducer = combineReducers({
  enemy,
  game,
  player,
  story
})

export default rootReducer
