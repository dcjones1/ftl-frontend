import React from 'react'
import withStyles from 'react-jss'
import '../space.css'

const styles = {
  wrapper: {
    position: 'relative',
    height: '100vh',
    width: '100vw',
  },
  container: {
    position: 'relative',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: '1',
  },
  '@media (max-width: 800px)': {
    container: {
      display: 'block',
      top: '23%',
      '& p': {
        marginBottom: '7%',
      },
    },
  },
  column: {
    flex: 1,
    textAlign: 'center',
    color: 'white',
    '& p': {
      fontFamily: 'Roboto',
      fontSize: '1.2rem',
      width: '75%',
      marginLeft: 'auto',
      marginRight: 'auto',
    },
    '& h2': {
      fontSize: '2rem',
    },
  },
  menuItems: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  link: {
    color: 'inherit',
    textDecoration: 'none',
    margin: '5px',
    fontSize: '1.5rem',
    '&:hover': {
        textDecoration: 'underline'
    }
  }
}

const MainMenu = (props) => {
  const { classes, newGame } = props
  return (
    <div className={classes.wrapper}>
      <div className="stars" />
      <div className="twinkling" />
      <div className={classes.container}>
        <div className={classes.column}>
          <h2>c++</h2>
          <p>
            Here are the rules for the game.
            They could get long and complicated so I want to make sure the text wraps properly.
            Otherwise, that could get pretty annoying.
          </p>
        </div>
        <div className={classes.column}>
          {/* <h2>FTL</h2> */}
          <div className={classes.menuItems}>
            <a className={classes.link} href="localhost:3000">Continue</a>
            <a
              className={classes.link}
              href="localhost:3000"
              onClick={newGame}
            >
              New Game
            </a>
            <a className={classes.link} href="localhost:3000">Stats</a>
            <a className={classes.link} href="localhost:3000">Options</a>
            <a className={classes.link} href="localhost:3000">Credits</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default withStyles(styles)(MainMenu)
