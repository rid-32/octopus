import React, { Component } from 'react'
// import PropTypes from 'prop-types'

// components
import AddressesForm from './AddressesForm'
import ConfirmButton from '../shared/ConfirmButton'

// styles
import styles from './styles.module.less'

class Addresses extends Component {

  render() {
    return (
      <div className={styles.container}>
        <div className="container">
          <h1 className={styles.pageTitle}>Home adress</h1>
          <p className={styles.pageNotice}>Please enter the director’s home address for the last 3 years.</p>
          <div className={styles.pageDelimiter}></div>

          <AddressesForm {...this.props} />

          <ConfirmButton className={styles.pageConfirmButton}>Confirm and Continue</ConfirmButton>
        </div>
      </div>
    )
  }
}

export default Addresses
