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
    outcome: '',
    decisionMade: false
  }

  handleKeyDown = (e) => {
    if (document.getElementById('story').style.display === 'block' && !this.state.decisionMade) {
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


  handleNext = () => {
    document.getElementById('story').style.display = 'none'
    this.setState({
      showOutcome: false,
      decisionMade: false
    })
    this.props.closeMenu()
    this.props.beginLevel()
  }

  handleDec1 = () => {
    if (!this.state.decisionMade) {
      this.setState({
        showOutcome: true,
        outcome: this.props.consequence[0],
        decisionMade: true
      })
      let scrap = Math.floor(Math.random() * 65 + 4)
      this.props.increaseScrap(scrap)
      if (this.props.health < 28 && this.props.health > 14) {
        this.props.increasePlayerHealth()
        this.props.increasePlayerHealth()
        setTimeout(() => swal(`You gained 2 health and gained ${scrap} scrap`), 2000)
      } else if (this.props.health < 15 && this.props.health > 3){
        this.props.increasePlayerHealth()
        this.props.increasePlayerHealth()
        this.props.increasePlayerHealth()
        this.props.increasePlayerHealth()
        setTimeout(() => swal(`You gained 4 health and gained ${scrap} scrap`), 2000)
      } else {
        setTimeout(() => swal(`You gained ${scrap} scrap.`), 2000)
      }
    }
  }

  handleDec2 = () => {
    if (!this.state.decisionMade) {
      this.setState({
        showOutcome: true,
        outcome: this.props.consequence[1],
        decisionMade: true
      })
      if (this.props.health > 3) {
        this.props.decreasePlayerHealth()
        this.props.decreasePlayerHealth()
        setTimeout(() => swal('You lost 2 health.'), 2000)
      }
    }
  }

  handleDec3 = () => {
    if (!this.state.decisionMade) {
      this.setState({
        showOutcome: true,
        outcome: this.props.consequence[2],
        decisionMade: true
      })
    }
  }


  render() {
    const { classes, title, story, choices } = this.props
    return (
      <div id="story" className={classes.modal}>
        <div className={classes.modalContent}>
          <div className={classes.info}>
            <h3>
              {title}
            </h3>
            <p>
              {story}
            </p>
          </div>
          <div className={classes.container}>
            <ol id="options">
              <li onClick={this.handleDec1}>{choices[0]}</li>
              <li onClick={this.handleDec2}>{choices[1]}</li>
              <li onClick={this.handleDec3}>{choices[2]}</li>
            </ol>
          </div>
          {this.state.showOutcome && (
            <p className={classes.info}>
              {this.state.outcome}
              <button
                className={classes.button}
                onClick={this.handleNext}
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
  health: state.player.health,
  title: state.story.title,
  story: state.story.story,
  choices: state.story.choices,
  consequence: state.story.consequence
})

const mapDispatchToProps = {
  beginLevel,
  increaseScrap,
  increasePlayerHealth,
  decreasePlayerHealth,
  closeMenu
}


export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(StoryMenu))
