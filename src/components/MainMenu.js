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
      width: '80%',
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
            Welcome! A few things to note before you begin:
          </p>
          <p>
            To fire your lasers, press the spacebar or 'autofire' button just once. This turns them on. Do it once more to turn them off. After each game event (opening the shop, moving to the next level), they will turn off and have to be restarted!
          </p>
          <p>
            There is a shop available to upgrade your shop. Top middle, the button labeled 'Shop'. Click it!
          </p>
          <p>
            Finally, you can see the level of all your systems on the bottom left. Each bar represents a level. 3 bars, 3 shields, easy!
          </p>
          <p>
            There will be 5 levels of increasing difficulty to beat.
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
