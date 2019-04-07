import React, { Component } from 'react'
import { connect } from 'react-redux'
import { decreasePlayerHealth, decreaseShield, increaseShield } from '../redux/actions'
import { checkCollision } from '../helpers/formulas'
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
        if (this.props.position.y < 200) {
          this.setState(state=> ({
            x: state.x -= 2,
            y: state.y += 0.1
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

    const enemyLaser = document.querySelectorAll('#enemyLaser')
    const playerShip = document.querySelector('#kestrel')
    this.coll = setInterval(() => {
      if (checkCollision(playerShip, enemyLaser)) {
        this.setState({
          x: this.props.position.x,
          y: this.props.position.y
        })
        this.props.decreasePlayerHealth()
      }
    }, this.state.intervalId)

    const shield = document.querySelector('#shield')
    this.shieldHit = setInterval(() => {
      if (checkCollision(shield, enemyLaser)) {
        this.setState({
          x: this.props.position.x,
          y: this.props.position.y
        })
        this.props.decreaseShield()
        setTimeout(() => {
          this.props.increaseShield()
        }, 1000)
      }
    }, this.state.intervalId)
  }

  componentDidUpdate() {
    //
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
        {/* {this.props.playerLaserOn && ( */}
        <ellipse
          id="enemyLaser"
          className={classes.laser}
          stroke="#000000"
          ry="1"
          rx="14.5"
          cx={this.state.x}
          cy={this.state.y}
          strokeWidth="0.2"
          fill="#ffa500"
        />
        {/* )} */}
      </React.Fragment>
    )
  }
}

const mapDispatchToProps = {
  decreasePlayerHealth,
  decreaseShield,
  increaseShield
}

export default connect(null, mapDispatchToProps)(withStyles(styles)(EnemyLaser))
