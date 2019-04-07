import React from 'react'
import withStyles from 'react-jss'

const styles = {
  text: {
    fill: 'white',
    fontSize: '1.3rem',
  }
}


const HealthBar = (props) => {
  const { classes } = props
  if (props.player) {
    return (
      <g>
        <text
          className={classes.text}
          x="30"
          y="30"
        >
          Health
        </text>
        <rect
          width="400"
          height="40"
          x="30"
          y="35"
          fill="#000000"
        />
      </g>
    )
  } else {
    return (
     <g>
       <text
         className={classes.text}
         x="600"
         y="500"
       >
         Enemy Health
       </text>
       <rect
         width="300"
         height="40"
         x="600"
         y="505"
         fill="#000000"
       />
     </g>
   )
 }
}
// const HealthBar = (props) => {
//   const { classes } = props
//   return (
//     <React.Fragment>
//       {props.player ? (
//         <g>
//           <text
//             className={classes.text}
//             x="30"
//             y="30"
//           >
//             Health
//           </text>
//           <rect
//             width="400"
//             height="40"
//             x="30"
//             y="35"
//             fill="#000000"
//           />
//         </g>
//       ) : (
//         <g>
//           <text
//             className={classes.text}
//             x="600"
//             y="500"
//           >
//             Enemy Health
//           </text>
//           <rect
//             width="300"
//             height="40"
//             x="600"
//             y="505"
//             fill="#000000"
//           />
//         </g>
//       )}
//     </React.Fragment>
//   )
// }

export default withStyles(styles)(HealthBar)
