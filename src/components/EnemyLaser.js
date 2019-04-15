import React, { Component } from 'react'
import { connect } from 'react-redux'
import { decreasePlayerHealth, decreaseShield, increaseShield } from '../redux/actions'
import { checkCollision, checkShieldHit } from '../helpers/formulas'
import Miss from './Miss'
import withStyles from 'react-jss'

const styles = {
  laser: {}
}

class EnemyLaser extends Component {
  state = {
    x: this.props.position.x,
    y: this.props.position.y,
    intervalId: 5
  }

  componentDidMount() {
    let frame = () => {
      if (this.state.x > 300) {
        if (this.props.position.y < 435) {
          this.setState(state=> ({
            x: state.x -= 2,
            y: state.y += 0.2
          }))
        } else {
          this.setState(state=> ({
            x: state.x -= 2,
            y: state.y -= 0.1
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

    const enemyLaser = document.querySelector(`#enemyLaser${this.props.id}`)
    const playerShip = document.querySelector('#kestrel')
    this.coll = setInterval(() => {
      if (checkCollision(playerShip, enemyLaser)) {
        if (Math.random() > (0.05 * this.props.engineLevel)) {
          this.setState({
            x: this.props.position.x,
            y: this.props.position.y
          })
          this.props.decreasePlayerHealth()
        } else {
          this.setState({
            x: this.props.position.x,
            y: this.props.position.y,
            showMiss: true
          })
          setTimeout(() => this.setState({showMiss: false}), 1000)
        }
      }
    }, this.state.intervalId)

    const shield = document.querySelector('#shield')
    this.shieldHit = setInterval(() => {
      if (checkShieldHit(shield, enemyLaser, this.props.shield)) {
        if (Math.random() > (0.05 * this.props.engineLevel)) {
          this.setState({
            x: this.props.position.x,
            y: this.props.position.y
          })
          this.props.decreaseShield()
          setTimeout(() => {
            this.props.increaseShield()
          }, 1000)
        } else {
          this.setState({
            x: this.props.position.x,
            y: this.props.position.y,
            showMiss: true
          })
          setTimeout(() => this.setState({showMiss: false}), 1000)
        }
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
        {this.props.enemyLaserOn ? (
          <ellipse
            id={`enemyLaser${this.props.id}`}
            className={classes.laser}
            stroke="#000000"
            ry="1"
            rx="14.5"
            cx={this.state.x}
            cy={this.state.y}
            strokeWidth="0.2"
            fill="#ffa500"
          />
        ) : (
          <ellipse
            id={`enemyLaser${this.props.id}`}
            className={classes.laser}
            stroke="#000000"
            ry="1"
            rx="14.5"
            cx={this.props.position.x}
            cy={this.props.position.y}
            strokeWidth="0.2"
            fill="#ffa500"
          />
        )}
        {this.state.showMiss && <Miss position={{x: 870, y: 350}} />}
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state) => ({
  engineLevel: state.player.engineLevel
})

const mapDispatchToProps = {
  decreasePlayerHealth,
  decreaseShield,
  increaseShield
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(EnemyLaser))
