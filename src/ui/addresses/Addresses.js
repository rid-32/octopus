import React, { Component } from 'react'
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

  state = {
    year: 1,
    month: 4,
    street: '',
    town: '',
    rowNumber: -1,
    yearIsOpen: false,
    monthIsOpen: false,
  }

  changeYear = ({ target }) => {
    const year = target.getAttribute('value') || this.state.year

    this.setState({
      ...this.state,
      yearIsOpen: !this.state.yearIsOpen,
      year,
    })
  }

  changeMonth = ({ target }) => {
    const month = target.getAttribute('value') || this.state.month

    this.setState({
      ...this.state,
      monthIsOpen: !this.state.monthIsOpen,
      month,
    })
  }

  changeAddress = (number, address) =>
    this.setState({
      ...this.state,
      rowNumber: number,
      street: address[0],
      town: address[address.length - 2],
    })

  onSubmit = _ => {
    const { history, location } = this.props
    const { rowNumber } = this.state
    if (!location.pathname.includes('confirmed') && rowNumber !== -1) {
      this.setState({
        ...this.state,
        rowNumber: -1,
      })
      history.push('/confirmed')
    }
  }

  closeMessage = _ => {
    const { history } = this.props
    history.push('/')
  }

  render() {
    const { year, month, yearIsOpen, monthIsOpen, rowNumber, street, town } = this.state
    const { postcode } = this.props

    return (
      <div className={styles.container}>
        <div className="container">
          <h1 className={styles.pageTitle}>Home adress</h1>
          <p className={styles.pageNotice}>Please enter the director’s home address for the last 3 years.</p>
          <div className={styles.pageDelimiter}></div>

          <Route path='/confirmed' render={() => (
            <ConfirmMessage className={styles.pageConfirmMessage} close={this.closeMessage}>
              <p>{`${street}, ${postcode}, ${town}`}</p>
              <p className={styles.pageConfirmMessageTitle}>{`Time at address: ${year} year${year > 1 ? 's' : ''} ${month} month${month > 1 ? 's' : ''}`}</p>
            </ConfirmMessage>
          )} />

          <p className={styles.pageFormTitle}>How long did you stay at your <span>current address</span>?</p>
          <div className={styles.pageFormYearsContainer}>
            <Button className={styles.pageButton} isIcon={true} click={this.changeYear}>
              {`${year} Year${year > 1 ? 's' : ''}`}
              {yearIsOpen && (
                <div className={styles.pageButtonList}>
                  {map(range(1, 4), (item, index) => (
                    <div key={index} value={item}>{`${item} year${item > 1 ? 's' : ''}`}</div>
                  ))}
                </div>
              )}
            </Button>
            <Button className={styles.pageButton} isIcon={true} click={this.changeMonth}>
              {`${month} Month${month > 1 ? 's' : ''}`}
              {monthIsOpen && (
                <div className={styles.pageButtonList}>
                  {map(range(1, 12), (item, index) => (
                    <div key={index} value={item}>{`${item} month${item > 1 ? 's' : ''}`}</div>
                  ))}
                </div>
              )}
            </Button>
          </div>

          <AddressesForm {...this.props} />
        </div>
        <Route path="/select/addresses" render={() => {
          const { addresses } = this.props

          return (
            <div className={styles.addresses}>
              <i className={`fas fa-angle-double-down ${styles.addressesIcon}`}></i>
              {addresses.map((item, index) => {
                const addr = item.split(',')
                return (
                  <div key={index} className={styles.addressesRow} onClick={() => this.changeAddress(index, addr)}>
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

        <ConfirmButton className={styles.pageConfirmButton} click={this.onSubmit}>Confirm and Continue</ConfirmButton>
      </div>
    )
  }
}

export default Addresses
