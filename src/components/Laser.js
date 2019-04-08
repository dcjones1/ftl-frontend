import React, { Component } from 'react'
import { connect } from 'react-redux'
import { decreaseEnemyHealth, decreaseEnemyShield, increaseEnemyShield } from '../redux/actions'
import { checkCollision, checkShieldHit } from '../helpers/formulas'
import withStyles from 'react-jss'

const styles = {
  laser: {}
}

class Laser extends Component {
  state = {
    x: this.props.position.x,
    y: this.props.position.y,
    intervalId: 5
  }

  componentDidMount() {
    let frame = () => {
      if (this.state.x < 1600) {
        if (this.props.position.y < 200) {
          this.setState(state=> ({
            x: state.x += 3,
            y: state.y += 0
          }))
        } else {
          this.setState(state=> ({
            x: state.x += 6,
            y: state.y -= 0
          }))
        }
      } else {
        setTimeout(() => {
          this.setState({
            x: this.props.position.x,
            y: this.props.position.y
          })
        }, 5)
      }
    }
    this.int = setInterval(frame, this.state.intervalId)

    const laser = document.querySelector(`#laser${this.props.id}`)
    const enemyShip = document.querySelector('#enemyShip')
    this.coll = setInterval(() => {
      if (checkCollision(enemyShip, laser)) {
        this.setState({
          x: this.props.position.x,
          y: this.props.position.y
        })
        this.props.decreaseEnemyHealth()
      }
    }, this.state.intervalId)

    const enemyShield = document.querySelector('#enemyShield')
    this.shieldHit = setInterval(() => {
      if (checkShieldHit(enemyShield, laser, this.props.enemyShield)) {
        this.setState({
          x: this.props.position.x,
          y: this.props.position.y
        })
        this.props.decreaseEnemyShield()
        setTimeout(() => {
          console.log('in timeout')
          this.props.increaseEnemyShield()
        }, 1000)
      }
    }, this.state.intervalId)
  }

  componentWillUnmount() {
    clearInterval(this.int)
    clearInterval(this.coll)
    clearInterval(this.shieldHit)
  }

  render() {
    const { classes } = this.props

    return (
      <React.Fragment>
        {this.props.playerLaserOn ? (
          <ellipse
            id={`laser${this.props.id}`}
            className={classes.laser}
            stroke="#000000"
            ry="1"
            rx="14.5"
            cx={this.state.x}
            cy={this.state.y}
            strokeWidth="0.2"
            fill="#0eed79"
          />
        ) : (
          <ellipse
            id={`laser${this.props.id}`}
            className={classes.laser}
            stroke="#000000"
            ry="1"
            rx="14.5"
            cx={this.props.position.x}
            cy={this.props.position.y}
            strokeWidth="0.2"
            fill="#0eed79"
          />
        )}
      </React.Fragment>
    )
  }
}

const mapDispatchToProps = {
  decreaseEnemyHealth,
  decreaseEnemyShield,
  increaseEnemyShield
}

export default connect(null, mapDispatchToProps)(withStyles(styles)(Laser))
