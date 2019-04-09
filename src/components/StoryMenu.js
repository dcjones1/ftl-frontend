import React, { Component } from 'react'
import { connect } from 'react-redux'
// import {  } from '../redux/actions'
import withStyles from 'react-jss'

const styles = {
    modal: {
    display: 'block',
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
    '&:hover': {
      color: 'black',
      textDecoration: 'none',
    },
    '&:focus': {
      color: 'black',
      textDecoration: 'none',
    },
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
        textDecoration: 'underline'
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


  handleClick() {
    document.getElementById('story').style.display = 'none'
  }

  handleDec1() {

  }

  handleDec2() {

  }

  handleDec3() {

  }

  render() {
    const { classes } = this.props
    return (
      <div id="story" className={classes.modal}>
        <div className={classes.modalContent}>
          <div className={classes.info}>
            <h3>
              Decision Time:
            </h3>
            <p>
              You arrive at an abandoned outpost with no signs of life. What should we do?
            </p>
          </div>
          <div className={classes.container}>
            <ol>
              <li>Look for signs of life.</li>
              <li>Shoot at it for fun.</li>
              <li>Leave</li>
            </ol>
          </div>
          {this.state.showOutcome && (
            <p className={classes.info}>
              {this.state.outcome}
              <button className={classes.button}>Next Level</button>
            </p>
          )}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}


export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(StoryMenu))
