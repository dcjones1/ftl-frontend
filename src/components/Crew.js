import React, { Component } from 'react'
import withStyles from 'react-jss'

const styles = {
  text: {
    fill: 'black',
    fontSize: '1.5rem',
    userSelect: 'none',
  }
}

class Crew extends Component {
  state = {
    x: this.props.position.x,
    y: this.props.position.y,
    selected: false,
    fill: '#09f'
  }

  handleKey = (e) => {
    if (this.state.selected) {
      switch (e.key) {

      case "a":
        if (this.state.x > 320) {
          this.setState(state => ({
            x: state.x - 65
          }))
        }
        break

      case "d":
        if (this.state.y < 390 || this.state.y > 460) {
          if (this.state.x < 570) {
            this.setState(state => ({
              x: state.x + 65
            }))
          }
        } else {
          if (this.state.x < 650) {
            this.setState(state => ({
              x: state.x + 65
            }))
          }
        }
        break

      case "s":
        if (this.state.x < 590) {
          if (this.state.y < 460) {
            this.setState(state => ({
              y: state.y + 65
            }))
          }
        }
        break

      case "w":
        if (this.state.x < 590) {
          if (this.state.y > 390) {
            this.setState(state => ({
              y: state.y - 65
            }))
          }
        }
        break

      default:
        return null
      }
    }
  }

  componentDidMount() {
    // document.addEventListener('click', this.handleClick)
    document.addEventListener('keypress', this.handleKey)
  }

  componentWillUnmount() {
    // document.removeEventListener('click', this.handleClick)
    document.removeEventListener('keypress', this.handleKey)
  }

  // handleClick = (e) => {
  //   if (this.state.selected) {
  //     this.setState(state => ({
  //       x: this.props.x,
  //       // x: e._targetInst.memoizedProps.x,
  //       y: e._targetInst.memoizedProps.y,
  //       // y: e._targetInst.memoizedProps.y,
  //       selected: false,
  //       fill: '#09f'
  //     }))
  //   }
  // }

  select = () => {
    let fill
    if (this.state.selected) {
      fill = '#09f'
    } else {
      fill = '#f00'
    }
    this.setState(state => ({
      selected: !state.selected,
      fill: fill
    }))
  }

  render() {
    const { classes } = this.props
    return (
      <g
        onClick={this.select}
      >
        <circle
          r="20"
          cx={this.state.x}
          cy={this.state.y}
          fill={this.state.fill}
          stroke="#000"
          strokeWidth="1"
        />
        <text
          className={classes.text}
          x={this.state.x - 12}
          y={this.state.y + 12}
        >
          1
        </text>
      </g>
      )
    }
}

export default withStyles(styles)(Crew)
