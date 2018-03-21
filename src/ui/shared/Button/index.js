import React from 'react'

// styles
import styles from './styles.module.less'

const Button = ({ children, className, isIcon, click, active }) => {
  const func = () => {}
  const onClick = click || func
  return (
    <div className={`${styles.button} ${className} ${active ? styles.buttonActive : ''}`} onClick={onClick}>
      {children}
      {isIcon && <i className={`fas fa-angle-down ${styles.buttonIcon}`}></i>}
    </div>
  )
}

export default Button
