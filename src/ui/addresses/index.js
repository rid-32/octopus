import React, { Component } from 'react'
// import PropTypes from 'prop-types'

// components
import Addresses from './Addresses'

class AddressesContainer extends Component {

  render() {
    return (
      <Addresses {...this.props} />
    )
  }
}

export default AddressesContainer
