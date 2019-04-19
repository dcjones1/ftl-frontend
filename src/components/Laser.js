import React, { Component } from 'react'
import { connect } from 'react-redux'
import { decreaseEnemyHealth, decreaseEnemyShield, increaseEnemyShield } from '../redux/actions'
import { checkCollision, checkShieldHit } from '../helpers/formulas'
import Miss from './Miss'
import withStyles from 'react-jss'

const styles = {
  laser: {}
}

class Laser extends Component {
  state = {
    x: this.props.position.x,
    y: this.props.position.y,
    intervalId: 5,
    showMiss: false
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
            x: state.x += 4,
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
        if (Math.random() > (0.03 * (this.props.enemyEngineLevel + this.props.enemyPilotLevel))) {
          this.setState({
            x: this.props.position.x,
            y: this.props.position.y
          })
          this.props.decreaseEnemyHealth()
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

    const enemyShield = document.querySelector('#enemyShield')
    this.shieldHit = setInterval(() => {
      if (checkShieldHit(enemyShield, laser, this.props.enemyShield)) {
        if (Math.random() > (0.03 * (this.props.enemyEngineLevel + this.props.enemyPilotLevel))) {
          this.setState({
            x: this.props.position.x,
            y: this.props.position.y
          })
          this.props.decreaseEnemyShield()
          setTimeout(() => {
            this.props.increaseEnemyShield()
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
          // implement at a future date
          // {/* <animateTransform
          //     attributeName="transform"
          //     attributeType="XML"
          //     type="translate"
          //     from="0 0"
          //     to={`${this.state.x} 0`}
          //     dur="1s"
          //     repeatCount="indefinite"
          // /> */}
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
        {this.state.showMiss && <Miss position={{x: 1070, y: 350}} />}
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state) => ({
  enemyEngineLevel: state.enemy.enemyEngineLevel,
  enemyPilotLevel: state.enemy.enemyPilotLevel
})

const mapDispatchToProps = {
  decreaseEnemyHealth,
  decreaseEnemyShield,
  increaseEnemyShield
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Laser))
