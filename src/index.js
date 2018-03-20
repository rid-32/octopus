import React from 'react';
import ReactDOM from 'react-dom';
import ApplicationContainer from './ui/application';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'

// reducers
import rootReducer from './ducks'

// styles
import './stylesheets/index.less'

// Redux-store
const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
)

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Route component={ApplicationContainer} />
    </Router>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
