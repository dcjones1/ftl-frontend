import React from 'react'
import Game from './containers/Game'
import GameOver from './components/GameOver'
import GameWin from './components/GameWin'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'

const App = (props) => {
  const { gameOver, gameWon } = props
  return (
    <Router>
      {gameOver || <Route path="/" component={Game} />}
      {gameOver && !gameWon && <GameOver />}
      {gameOver && gameWon && <GameWin />}
    </Router>
  )
}

const mapStateToProps = (state) => ({
  gameOver: state.game.gameOver,
  gameWon: state.game.gameWon
})

export default connect(mapStateToProps)(App)
