import React, { Component } from 'react'
import { connect } from 'react-redux'
import { decreaseEnemyHealth } from '../redux/actions'
import { checkCollision } from '../helpers/formulas'
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
      if (this.state.x < 840) {
        if (this.props.position.y < 200) {
          this.setState(state=> ({
            x: state.x += 3,
            y: state.y += 0.13
          }))
        } else {
          this.setState(state=> ({
            x: state.x += 3,
            y: state.y -= 0.08
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

    const laser = document.querySelectorAll('#laser')
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
  }

  componentWillUnmount() {
    clearInterval(this.int)
    clearInterval(this.coll)
  }

  render() {
    const { classes } = this.props

    return (
      <React.Fragment>
        {this.props.playerLaserOn ? (
          <ellipse
            id="laser"
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
            id="laser"
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
  decreaseEnemyHealth
}

export default connect(null, mapDispatchToProps)(withStyles(styles)(Laser))
