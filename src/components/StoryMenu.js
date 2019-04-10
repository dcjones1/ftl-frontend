import React, { Component } from 'react'
import { connect } from 'react-redux'
import { beginLevel, increaseScrap, decreasePlayerHealth, increasePlayerHealth, closeMenu } from '../redux/actions'
import swal from 'sweetalert'
import withStyles from 'react-jss'

const styles = {
  modal: {
    display: 'none',
    position: 'relative',
    zIndex: 1,
    top: '15%',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '85%',
    height: '70%',
    overflow: 'auto',
    border: '1px solid white',
    backgroundColor: 'rgba(0,0,0,0.9)',
    // '&:hover': {
    //   color: 'black',
    //   textDecoration: 'none',
    // },
    // '&:focus': {
    //   color: 'black',
    //   textDecoration: 'none',
    // },
  },
  'modalContent': {
    backgroundColor: '#fefefe',
    margin: '5% auto',
    padding: '20px',
    border: '1px solid #888',
    width: '80%',
    height: '80%',
    userSelect: 'none',
  },
  info: {
    textAlign: 'center',
  },
  container: {
    display: 'flex',
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    '& li': {
      marginBottom: '3%',
      '&:hover': {
        cursor: 'pointer',
        // textDecoration: 'underline'
      },
    },
  },
  button: {
    backgroundColor: '#4CAF50',
    border: 'none',
    color: 'white',
    height: '3rem',
    width: '70%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '3%',
    textAlign: 'center',
    textDecoration: 'none',
    display: 'block',
    fontSize: '1rem',
  }
}

class StoryMenu extends Component {
  state = {
    showOutcome: false,
    outcome: ''
  }

  handleKeyDown = (e) => {
    if (document.getElementById('story').style.display === 'block') {
      switch (e.key) {
        case "1":
          this.handleDec1()
          break;
        case "2":
          this.handleDec2()
          break;
        case "3":
          this.handleDec3()
          break;
        default:
          return null
      }
    }
  }

  componentDidMount = () => {
    document.addEventListener("keydown", this.handleKeyDown)
  }

  componentWillUnmount = () => {
    document.removeEventListener("keydown", this.handleKeyDown)
  }


  handleClick = () => {
    document.getElementById('story').style.display = 'none'
    this.setState({
      showOutcome: false
    })
    this.props.closeMenu()
    this.props.beginLevel()
  }

  handleDec1 = () => {
    this.setState({
      showOutcome: true,
      outcome: 'You and your crew search the ship. You find some parts to make repairs as well as some spare scrap.'
    })
    let scrap = Math.floor(Math.random() * 65 + 4)
    this.props.increaseScrap(scrap)
    if (this.props.health < 28) {
      this.props.increasePlayerHealth()
      this.props.increasePlayerHealth()
      setTimeout(() => swal(`You gained 2 health and gained ${scrap} scrap`), 2000)
    } else {
      setTimeout(() => swal(`You gained ${scrap} scrap.`), 2000)
    }
  }

  handleDec2 = () => {
    this.setState({
      showOutcome: true,
      outcome: 'The outpost explodes, damaging your ship. Reckless.'
    })
    if (this.props.health > 3) {
      this.props.decreasePlayerHealth()
      this.props.decreasePlayerHealth()
      setTimeout(() => swal('You lost 2 health.'), 2000)
    }
  }

  handleDec3 = () => {
    this.setState({
      showOutcome: true,
      outcome: 'The safe choice. As you leave, you hear explosions and the sounds of ships in battle.'
    })
  }


  render() {
    const { classes } = this.props
    return (
      <div id="story" className={classes.modal}>
        <div className={classes.modalContent}>
          <div className={classes.info}>
            <h3>
              Outpost Opportunity
            </h3>
            <p>
              You arrive at an abandoned outpost with no signs of life. What should you do?
            </p>
          </div>
          <div className={classes.container}>
            <ol id="options">
              <li onClick={this.handleDec1}>Look for signs of life.</li>
              <li onClick={this.handleDec2}>Shoot at it for fun.</li>
              <li onClick={this.handleDec3}>Leave</li>
            </ol>
          </div>
          {this.state.showOutcome && (
            <p className={classes.info}>
              {this.state.outcome}
              <button
                className={classes.button}
                onClick={this.handleClick}
              >
                Next Level
              </button>
            </p>
          )}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  health: state.player.health
})

const mapDispatchToProps = {
  beginLevel,
  increaseScrap,
  increasePlayerHealth,
  decreasePlayerHealth,
  closeMenu
}


export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(StoryMenu))
