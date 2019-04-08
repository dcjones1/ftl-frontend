import React, { Component } from 'react'

class Star extends Component {
  // let x = Math.floor(Math.random() * 1920)
  // let y = Math.floor(Math.random() * 1080)

  shouldComponentUpdate(nextProps) {
    if (nextProps.position.x !== this.props.position.x) {
      return false
    }
  }

  render() {
    return (
      <circle
        r="1.2"
        cx={this.props.position.x}
        cy={this.props.position.y}
        fill="#fff"
      />
    )
  }
}

export default Star
