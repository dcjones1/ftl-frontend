import React, { Component } from 'react'
import MainMenu from '../components/MainMenu'
import Screen from '../components/Screen'
import { newGame, decreasePlayerHealth } from '../redux/actions'
import { connect } from 'react-redux'

class Game extends Component {

  componentDidUpdate(prevProps) {
    if (prevProps.playing !== this.props.playing) {
      this.forceUpdate()
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
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  // prop: the equiv state
  playing: state.playing,
})


const mapDispatchToProps = {
  newGame,
  decreasePlayerHealth
}

export default connect(mapStateToProps, mapDispatchToProps)(Game)
