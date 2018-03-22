import React from 'react'

// styles
import styles from './styles.module.less'

const Button = ({ children, className, isIcon, onClick, active }) => {
  return (
    <div className={`${styles.button} ${className} ${active ? styles.buttonActive : ''}`} onClick={onClick}>
      {children}
      {isIcon && <i className={`fas fa-angle-down ${styles.buttonIcon}`}></i>}
    </div>
  )
}

Button.defaultProps = {
  onClick: () => ({}),
}

export default Button
