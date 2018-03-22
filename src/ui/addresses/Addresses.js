import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Route } from 'react-router-dom'
import range from 'lodash/range'
import map from 'lodash/map'

// components
import AddressesForm from './AddressesForm'
import ConfirmButton from '../shared/ConfirmButton'
import ConfirmMessage from '../shared/ConfirmMessage'
import Button from '../shared/Button'

// styles
import styles from './styles.module.less'

class Addresses extends Component {
  static propTypes = {
    postcode: PropTypes.string.isRequired,
    state: PropTypes.shape({
      year: PropTypes.string.isRequired,
      month: PropTypes.string.isRequired,
      rowNumber: PropTypes.number.isRequired,
      yearIsOpen: PropTypes.bool.isRequired,
      monthIsOpen: PropTypes.bool.isRequired,
      street: PropTypes.string.isRequired,
      town: PropTypes.string.isRequired,
    }).isRequired,
    closeMessage: PropTypes.func.isRequired,
    changeYear: PropTypes.func.isRequired,
    changeMonth: PropTypes.func.isRequired,
    changeAddress: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
  }

  render() {
    const { postcode, state, closeMessage, changeYear, changeMonth, changeAddress, onSubmit } = this.props
    const { year, month, yearIsOpen, monthIsOpen, rowNumber, street, town } = state

    return (
      <div className={styles.container}>
        <div className="container">
          <h1 className={styles.pageTitle}>Home adress</h1>
          <p className={styles.pageNotice}>Please enter the director’s home address for the last 3 years.</p>
          <div className={styles.pageDelimiter}></div>

          <Route path='/confirmed' render={() => (
            <ConfirmMessage className={styles.pageConfirmMessage} close={closeMessage}>
              <p>{`${street}, ${postcode}, ${town}`}</p>
              <p className={styles.pageConfirmMessageTitle}>{`Time at address: ${year} year${year > 1 ? 's' : ''} ${month} month${month > 1 ? 's' : ''}`}</p>
            </ConfirmMessage>
          )} />

          <p className={styles.pageFormTitle}>How long did you stay at your <span>current address</span>?</p>
          <div className={styles.pageFormYearsContainer}>
            <Button className={styles.pageButton} isIcon={true} onClick={changeYear}>
              {`${year} Year${year > 1 ? 's' : ''}`}
              {yearIsOpen && (
                <div className={styles.pageButtonList}>
                  {map(range(1, 4), (item, index) => (
                    <div key={index} value={item}>{`${item} year${item > 1 ? 's' : ''}`}</div>
                  ))}
                </div>
              )}
            </Button>
            <Button className={styles.pageButton} isIcon={true} onClick={changeMonth}>
              {`${month} Month${month > 1 ? 's' : ''}`}
              {monthIsOpen && (
                <div className={`${styles.pageButtonList} ${styles.pageButtonList2}`}>
                  {map(range(1, 12), (item, index) => (
                    <div key={index} value={item}>{`${item} month${item > 1 ? 's' : ''}`}</div>
                  ))}
                </div>
              )}
            </Button>
          </div>

          <AddressesForm
            {...this.props}
            {...state}
          />
        </div>
        <Route path="/select/addresses" render={() => {
          const { addresses } = this.props

          return (
            <div className={styles.addresses}>
              <i className={`fas fa-angle-double-down ${styles.addressesIcon}`}></i>
              {addresses.map((item, index) => {
                const addr = item.split(',')
                return (
                  <div key={index} className={styles.addressesRow} onClick={() => changeAddress(index, addr)}>
                    <div className={styles.addressesBlock}>
                      <p className={styles.addressesTitle}>{`Address line ${index + 1}`}</p>
                      <Button className={styles.addressesButton} active={rowNumber === index}>{addr[0]}</Button>
                    </div>
                    <div className={styles.addressesBlock}>
                      <p className={styles.addressesTitle}>Town:</p>
                      <Button className={styles.addressesButton} active={rowNumber === index}>{addr[addr.length - 2]}</Button>
                    </div>
                  </div>
                )
              })}
            </div>
          )
        }} />

        <ConfirmButton className={styles.pageConfirmButton} onClick={onSubmit}>Confirm and Continue</ConfirmButton>
      </div>
    )
  }
}

export default Addresses
