import React, { Component } from 'react'
import { Route } from 'react-router-dom'
// import PropTypes from 'prop-types'

// components
import ApplicationHeader from '../shared/ApplicationHeader'
import AddressesContainer from '../addresses'

class MainPageContainer extends Component {

  render() {
    return (
      <div>
        <ApplicationHeader />
        <Route component={AddressesContainer} />
      </div>
    )
  }
}

export default MainPageContainer
