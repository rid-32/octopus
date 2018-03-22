import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

// actions
import * as actions from '../../ducks/addresses/actions'

// selectors
import { getAddresses, getAddressesCollection, getPostcode } from '../../ducks/addresses/selectors'

// components
import Addresses from './Addresses'

class AddressesContainer extends Component {
  static propTypes = {
    history: PropTypes.shape({
      push: PropTypes.func.isRequired,
    }).isRequired,
  }

  state = {
    year: '1',
    month: '4',
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
      window.scrollTo(0, 0)
    }
  }

  closeMessage = _ => {
    const { history } = this.props
    this.setState({
      ...this.state,
      street: '',
      town: '',
    })
    history.push('/')
  }

  render() {
    return (
      <Addresses
        {...this.props}
        state={this.state}
        onSubmit={this.onSubmit}
        changeAddress={this.changeAddress}
        changeYear={this.changeYear}
        changeMonth={this.changeMonth}
        closeMessage={this.closeMessage}
      />
    )
  }
}

const mapStateToProps = state => ({
  addresses: getAddressesCollection(state),
  isLoading: getAddresses(state).isLoading,
  postcode: getPostcode(state),
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(AddressesContainer)
