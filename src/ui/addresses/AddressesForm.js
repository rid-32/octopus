import React, { Component } from 'react'
import { Route } from 'react-router-dom'

// components
import Button from '../shared/Button'
import Input from '../shared/Input'

// styles
import styles from './styles.module.less'

class AddressesForm extends Component {

  render() {
    const { history } = this.props

    return (
      <div className={styles.pageForm}>
        <p className={styles.pageFormTitle}>How long did you stay at your <span>current address</span>?</p>
        <div className={styles.pageFormYearsContainer}>
          <Button className={styles.pageButton}>1 Year</Button>
          <Button className={styles.pageButton}>4 Month</Button>
        </div>
        <div className={styles.pageFormSearchContainer}>
          <p className={styles.pageFormTitle}>Your address:</p>
          <Input
            className={styles.pageSearch}
            placeholder={'Address'}
            history={history}
          />
        </div>
        <Route path='/select' render={() => {
          return (
            <div className={styles.pageFormSearchContainer}>
              <p className={styles.pageFormTitle}>Select your address:</p>
              <Button className={styles.pageSearch}>Select your address</Button>
            </div>
          )
        }} />
      </div>
    )
  }
}

export default AddressesForm
