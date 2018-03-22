import React from 'react'

// styles
import styles from './styles.module.less'

const ConfirmButton = ({ children, className, onClick }) => {
  return (
    <div className={`${className} ${styles.button}`} onClick={onClick}>
      {children}
    </div>
  )
}

ConfirmButton.defaultProps = {
  onClick: () => ({}),
}

export default ConfirmButton
