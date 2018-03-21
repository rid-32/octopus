import React from 'react'

// styles
import styles from './styles.module.less'

const ErrorMessage = props => {
  return (
    <p className={styles.msg}>There is not addresses!</p>
  )
}

export default ErrorMessage
