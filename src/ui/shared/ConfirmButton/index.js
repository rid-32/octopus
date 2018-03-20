import React from 'react'

// styles
import styles from './styles.module.less'

const ConfirmButton = ({ children, className }) => {
  return (
    <div className={`${className} ${styles.button}`}>
      {children}
    </div>
  )
}

export default ConfirmButton
