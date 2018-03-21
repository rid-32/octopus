import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

// actions
import * as actions from '../../ducks/addresses/actions'

// selectors
import { getAddresses, getAddressesCollection, getPostcode } from '../../ducks/addresses/selectors'

// components
import Addresses from './Addresses'

class AddressesContainer extends Component {

  render() {
    return (
      <Addresses {...this.props} />
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
