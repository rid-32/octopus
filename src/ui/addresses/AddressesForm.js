import React, { Component } from 'react'
import { Route } from 'react-router-dom'

// components
import Button from '../shared/Button'
import Input from '../Input'
import ErrorMessage from '../shared/ErrorMessage'

// styles
import styles from './styles.module.less'

class AddressesForm extends Component {

  toggleSelect = _ => {
    const { location, history } = this.props

    if (location.pathname.includes('addresses')) {
      history.push('/select')
    } else {
      history.push('/select/addresses')
    }
  }

  render() {
    const { history, actions, isLoading } = this.props

    return (
      <div className={styles.pageForm}>
        <div className={styles.pageFormSearchContainer}>
          <p className={styles.pageFormTitle}>Your address:</p>
          <Input
            className={styles.pageSearch}
            placeholder={'Address'}
            history={history}
            actions={actions}
            isLoading={isLoading}
          />
        </div>
        <Route path='/select' render={() => {
          return (
            <div className={styles.pageFormSearchContainer}>
              <p className={styles.pageFormTitle}>Select your address:</p>
              <Button
                className={styles.pageSearch}
                isIcon={true}
                onClick={this.toggleSelect}
              >
                Select your Address
              </Button>
            </div>
          )
        }} />
        {!isLoading && <Route path='/error' component={ErrorMessage} />}
      </div>
    )
  }
}

export default AddressesForm
