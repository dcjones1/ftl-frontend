import React from 'react'
import Game from './containers/Game'
import GameOver from './components/GameOver'
import { connect } from 'react-redux'

const App = (props) => {
  const { gameOver } = props
  console.log(gameOver)
  return (
    <React.Fragment>
      {gameOver ? (
        <GameOver />
      ) : (
        <Game />
      )}
    </React.Fragment>
  )
}

const mapStateToProps = (state) => ({
  gameOver: state.game.gameOver
})

export default connect(mapStateToProps)(App)
