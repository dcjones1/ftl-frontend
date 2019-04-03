import React, { Component } from 'react'
import withStyles from 'react-jss'

const styles = {
  laser: {}
}

class Laser extends Component {
  state = {
    x: this.props.position.x,
    intervalId: 5
  }

  componentDidMount() {
    let frame = () => {
      if (this.state.x < 900) {
        this.setState(state=> ({
          x: state.x += 2
        }))
      } else {
        this.setState({
          x: this.props.position.x
        })
      }
    }
    setInterval(frame, this.state.intervalId)
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId)
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
            cy={this.props.position.y}
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

export default withStyles(styles)(Laser)
