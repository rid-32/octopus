import React, { Component} from 'react'
import PropTypes from 'prop-types'
import { Route } from 'react-router-dom'

// components
import HomePageContainer from  '../homePage'

class ApplicationContainer extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
  };

  render() {
    return (
      <div>
        <Route path='/' component={HomePageContainer} />
      </div>
    );
  }
}

export default ApplicationContainer;
