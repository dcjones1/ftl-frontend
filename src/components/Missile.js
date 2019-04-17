import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fireMissile, decreaseEnemyHealth } from '../redux/actions'
import { checkCollision } from '../helpers/formulas'
import Miss from './Miss'

class Missile extends Component {
  state = {
    x: this.props.position.x,
    y: this.props.position.y,
    intervalId: 5,
    showMiss: false,
  }

  launchMissile = (e) => {
    if (!this.props.menuOpen) {
      // this.launchIntervals = {}
      if (this.props.id === this.props.lastMissile) {
        if (e.key === 'f' || e.type === 'click') {
          // this.launchIntervals[this.props.id] = setInterval(() => {
          this.launchIntervals = setInterval(() => {
            if (this.state.x < 1600) {
              this.setState(state => ({
                x: state.x += 1
              }))
            }
          }, this.state.intervalId)
        }
      }
    }
  }

  componentDidMount() {
    const missile = document.querySelector(`#missile${this.props.id}`)
    const enemyShip = document.querySelector('#enemyShip')
    this.coll = setInterval(() => {
      let i = 1
      if (checkCollision(enemyShip, missile)) {
        if (Math.random() > (0.03 * (this.props.enemyEngineLevel + this.props.enemyPilotLevel))) {
          // clearInterval(this.launchIntervals[this.props.id])
          clearInterval(this.launchIntervals)
          this.setState({
            x: this.props.position.x,
            y: this.props.position.y
          })
          this.props.fireMissile(i)
          this.props.decreaseEnemyHealth()
          this.props.decreaseEnemyHealth()
          this.props.decreaseEnemyHealth()
          i++
        } else {
          // clearInterval(this.launchIntervals[this.props.id])
          clearInterval(this.launchIntervals)
          this.setState({
            x: this.props.position.x,
            y: this.props.position.y,
            showMiss: true
          })
          setTimeout(() => this.setState({showMiss: false}), 1000)
          this.fireMissile(i)
          i++
        }
      }
    }, this.state.intervalId)

    document.addEventListener('keydown', this.launchMissile)
    document.querySelector('#missileBtn').addEventListener('click', this.launchMissile)
  }

  fireMissile = (i) => {
    if (i === 1) {
      setTimeout(() => this.props.fireMissile(), 1200)
    }
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.fireMissile)
    document.querySelector('#missileBtn').removeEventListener('click', this.launchMissile)
    // clearInterval(this.launchIntervals[this.props.id])
    clearInterval(this.launchIntervals)
    clearInterval(this.int)
    clearInterval(this.coll)
  }

  render() {
    return (
      <React.Fragment>
        <svg
          id={`missile${this.props.id}`}
          viewBox="0, 0, 1100, 1100"
          x={this.state.x}
          y={this.state.y}
        >
          <defs><clipPath id="_clipPath_qvMAk39YSiRZfYCXS3seyXBmXQiKkjSi">
            <rect width="85.039" height="85.039"/></clipPath>
          </defs>
          <g clipPath="url(#_clipPath_qvMAk39YSiRZfYCXS3seyXBmXQiKkjSi)">
            <path d=" M 10 34.331 L 5 36.831 L 10 39.331 L 5 41.831 L 10 44.331 L 10 34.331 Z " fill="rgb(230,126,47)"/>
            <path d=" M 20 34.331 L 13 28.661 L 2.5 28.661 L 9.5 34.331 L 20 34.331 Z " fill="rgb(108,108,108)" vectorEffect="non-scaling-stroke" strokeWidth="1" stroke="rgb(0,0,0)" strokeLinejoin="miter" strokeLinecap="square" strokeMiterlimit="3"/>
            <path d=" M 20 44.331 L 13 50 L 2.5 50 L 9.5 44.331 L 20 44.331 Z " fill="rgb(108,108,108)" vectorEffect="non-scaling-stroke" strokeWidth="1" stroke="rgb(0,0,0)" strokeLinejoin="miter" strokeLinecap="square" strokeMiterlimit="3"/>
            <line x1="10" y1="34.331" x2="10" y2="44.331" vectorEffect="non-scaling-stroke" strokeWidth="1" stroke="rgb(0,0,0)" strokeLinejoin="miter" strokeLinecap="square" strokeMiterlimit="3"/>
            <ellipse vectorEffect="non-scaling-stroke" cx="40" cy="39.330708661417304" rx="10.000000000000007" ry="5" fill="rgb(208,208,208)" strokeWidth="1" stroke="rgb(0,0,0)" strokeLinejoin="miter" strokeLinecap="square" strokeMiterlimit="3"/>
            <path d=" M 10 34.331 L 10 44.331 L 40 44.331 L 40 34.331 L 10 34.331 Z " fill="rgb(208,208,208)" vectorEffect="non-scaling-stroke" strokeWidth="1" stroke="rgb(0,0,0)" strokeLinejoin="miter" strokeLinecap="square" strokeMiterlimit="3"/>
            <path d=" M 27.087 34.331 L 27.087 44.331 L 20 44.331 L 20 34.331 L 27.087 34.331 Z " fill="rgb(89,85,85)" vectorEffect="non-scaling-stroke" strokeWidth="1" stroke="rgb(0,0,0)" strokeLinejoin="miter" strokeLinecap="square" strokeMiterlimit="3"/>
            <line x1="20" y1="34.331" x2="20" y2="44.331" vectorEffect="non-scaling-stroke" strokeWidth="1" stroke="rgb(230,126,47)" strokeLinejoin="miter" strokeLinecap="square" strokeMiterlimit="3"/>
          </g>
        </svg>
        {this.state.showMiss && <Miss position={{x: 1220, y: 350}} />}
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state) => ({
  menuOpen: state.game.menuOpen,
  enemyEngineLevel: state.enemy.enemyEngineLevel,
  enemyPilotLevel: state.enemy.enemyPilotLevel
})

const mapDispatchToProps = {
  fireMissile,
  decreaseEnemyHealth
}

export default connect(mapStateToProps, mapDispatchToProps)(Missile)
