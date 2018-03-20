import React from 'react'

// styles
import styles from './styles.module.less'

// images
import logo from '../../../img/vector-smart-object.png'

const ApplicationHeader = props => {
  return (
    <header className={styles.container}>
      <img src={logo} title="logo" alt="logo" />
    </header>
  )
}

export default ApplicationHeader
