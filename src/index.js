import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'

// reducers
import rootReducer from './ducks'

// components
import HomePage from './ui/homePage'

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
      <Route component={HomePage} />
    </Router>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
