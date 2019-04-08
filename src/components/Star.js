import React, { Component } from 'react'

class Star extends Component {

  shouldComponentUpdate(nextProps) {
    return false
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
