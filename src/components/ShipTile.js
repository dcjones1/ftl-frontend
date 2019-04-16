import React from 'react'
import withStyles from 'react-jss'

const styles = {
  text: {
    fill: 'black',
    fontSize: '1.5rem',
    userSelect: 'none',
  }
}


const ShipTile = (props) => {
  const { id, position, letter, classes } = props
  return (
    <g id={id}>
      <defs>
        <radialGradient id="grad2" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#F5F5F5', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#999', stopOpacity: 1 }} />
        </radialGradient>
      </defs>
      <rect
        x={position.x}
        y={position.y}
        width="65"
        height="65"
        fill="url(#grad2)"
        // fill="#F5F5F5"
        stroke="#404040"
        strokeWidth="5"
      />
      <text
        className={classes.text}
        x={position.x + 20}
        y={position.y + 45}
      >
        {letter ? letter : null}
      </text>
    </g>
  )
}

export default withStyles(styles)(ShipTile)
