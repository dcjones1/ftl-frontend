import React, { Component } from 'react'
import MainMenu from '../components/MainMenu'
import Screen from '../components/Screen'
import { newGame } from '../redux/actions'
import { connect } from 'react-redux'

class Game extends Component {

  componentDidUpdate(prevProps) {
    if (prevProps.playing !== this.props.playing) {
      this.forceUpdate()
    }
  }


  render() {
    console.log(this.props.playing)
    return (
      <div>
        {this.props.playing ? (
          <Screen
            health={this.props.health}
          />
        ) : (
          <MainMenu
            newGame={this.props.newGame}
          />
        )}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  playing: state.playing,
  health: state.gameState.health
})


const mapDispatchToProps = {
  newGame
}

export default connect(mapStateToProps, mapDispatchToProps)(Game)
