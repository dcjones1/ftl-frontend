export const NEW_GAME = 'NEW_GAME'
export const TOGGLE_PLAYER_LASER = 'TOGGLE_PLAYER_LASER'


export const newGame = () => {
  return {
    type: NEW_GAME
  }
}

export const togglePlayerLaser = () => ({
  type: TOGGLE_PLAYER_LASER
})
