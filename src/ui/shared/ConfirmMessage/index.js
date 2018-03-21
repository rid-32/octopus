import React, { Component } from 'react'

// styles
import styles from './styles.module.less'

class ConfirmMessage extends Component {
  shouldComponentUpdate() {
    return false
  }

  render() {
    const { className, children, close } = this.props

    return (
      <div className={`${className || ''} ${styles.msg}`}>
        {children}
        <i className={`fas fa-times ${styles.msgIcon}`} onClick={close}></i>
      </div>
    )
  }
}

export default ConfirmMessage
