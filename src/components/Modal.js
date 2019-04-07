import React from 'react'
import withStyles from 'react-jss'

const styles = {
    modal: {
    display: 'none',
    position: 'relative',
    zIndex: 1,
    top: '7%',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '85%',
    height: '85%',
    overflow: 'auto',
    backgroundColor: 'rgba(0,0,0,0.9)',
    '&:hover': {
      color: 'black',
      textDecoration: 'none',
      cursor: 'pointer',
    },
    '&:focus': {
      color: 'black',
      textDecoration: 'none',
      cursor: 'pointer',
    },
  },

  'modalContent': {
    backgroundColor: '#fefefe',
    margin: '15% auto',
    padding: '20px',
    border: '1px solid #888',
    width: '80%',
  },

  close: {
    color: '#aaa',
    float: 'right',
    fontSize: '28px',
    fontWeight: 'bold',
  },
}

const Modal = (props) => {
  function handleClick() {
    document.getElementById('id01').style.display = 'none'
  }

  const { classes } = props
  return (
    <div id="id01" className={classes.modal}>
      <div className={classes.modalContent}>
        <span className={classes.close} onClick={handleClick}>&times;</span>
        <p>Some text in the Modal..</p>
        <p>Some text in the Modal..</p>
      </div>
    </div>
  )
}

export default withStyles(styles)(Modal)
