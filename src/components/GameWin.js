import React from 'react'
import { resetGame } from '../redux/actions'
import { connect } from 'react-redux'
import withStyles from 'react-jss'
import { Link } from 'react-router-dom'
import '../space.css'

const styles = {
  wrapper: {
    position: 'relative',
    height: '100%',
    width: '100%',
  },
  container: {
    position: 'relative',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: '1',
  },
  column: {
    flex: 1,
    textAlign: 'center',
    color: 'white',
    '& p': {
      fontSize: '1.5rem',
      width: '75%',
      margin: '10% auto'
    },
    '& h2': {
      fontSize: '2rem',
    },
  },
  '@media (max-width: 800px)': {
    column: {
      display: 'block',
      marginTop: '-30%',
    },
  },
  link: {
    color: 'inherit',
    textDecoration: 'none',
    margin: '5px',
    fontSize: '1.5rem',
    '&:hover': {
        textDecoration: 'underline'
    }
  },
  span: {
    color: 'red'
  }
}

const GameWin = (props) => {
  function reset() {
    props.resetGame()
  }


  const { classes } = props
  return (
    <div className={classes.wrapper}>
      <div className="stars" />
      <div className="twinkling" />
      <div className={classes.container}>
        <div className={classes.column}>
          <h2>c++</h2>
          <p>
            You won!!
          </p>
          <p>
            Score: 10000000
          </p>
          <Link
            className={classes.link}
            to="/"
            onClick={reset}
          >
            Main Menu
          </Link>
        </div>
      </div>
    </div>
  )
}

const mapDispatchToProps = {
  resetGame
}

export default connect(null, mapDispatchToProps)(withStyles(styles)(GameWin))
