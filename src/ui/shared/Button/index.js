import React from 'react'

// styles
import styles from './styles.module.less'

const Button = ({ children, className }) => {
  return (
    <div className={`${styles.button} ${className}`}>
      {children}
    </div>
  )
}

export default Button
