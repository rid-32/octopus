import React from 'react'

// styles
import styles from './styles.module.less'

const ConfirmButton = ({ children, className, click }) => {
  const func = () => {}
  const onClick = click || func
  return (
    <div className={`${className} ${styles.button}`} onClick={onClick}>
      {children}
    </div>
  )
}

export default ConfirmButton
