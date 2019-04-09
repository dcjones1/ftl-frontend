import React, { Component } from 'react'
import MainMenu from '../components/MainMenu'
import Screen from '../components/Screen'
import Shop from '../components/Shop'
import StoryMenu from '../components/StoryMenu'
import { newGame, decreasePlayerHealth, loseGame, winGame, fetchLevel } from '../redux/actions'
import { connect } from 'react-redux'

class Game extends Component {

  componentDidMount() {
    this.props.fetchLevel()
  }

  componentDidUpdate(prevProps) {
    if (prevProps.playing !== this.props.playing) {
      this.forceUpdate()
    }
    if (this.props.health === 0) {
      this.props.loseGame()
    } else if (this.props.enemyHealth === 0) {
      this.props.winGame()
      document.getElementById('story').style.display = 'block'
    }
  }



  render() {
    const { playing, newGame } = this.props

    return (
      <div id="game" style={{height: '100vh', width: '100vw'}}>
        {playing ? (
          <Screen />
        ) : (
          <MainMenu
            newGame={newGame}
          />
        )}
        <Shop />
        <StoryMenu />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  // prop: the equiv state
  playing: state.game.playing,
  health: state.player.health,
  enemyHealth: state.enemy.enemyHealth
})


const mapDispatchToProps = {
  newGame,
  decreasePlayerHealth,
  loseGame,
  winGame,
  fetchLevel
}

export default connect(mapStateToProps, mapDispatchToProps)(Game)
