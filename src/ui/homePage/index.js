import React, { Component } from 'react'
import { Route } from 'react-router-dom'
// import PropTypes from 'prop-types'

// components
import ApplicationHeader from '../shared/ApplicationHeader'
import AddressesContainer from '../addresses'

class HomePageContainer extends Component {

  componentDidMount() {
    const { history } = this.props
    history.push('/')
  }

  render() {
    return (
      <div>
        <ApplicationHeader />
        <Route component={AddressesContainer} />
      </div>
    )
  }
}

export default HomePageContainer
