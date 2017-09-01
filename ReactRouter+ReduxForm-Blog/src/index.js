import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route } from 'react-router-dom';

import App from './components/app';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

class Hello extends React.Component {
  render() { return <div>Wassup B!</div> };
}

class FOff extends React.Component {
  render() { return <div>F Off!</div> };
}

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    {/* <App /> */}
    <BrowserRouter>
      <div>
        <Route path="/wassup" component={Hello} />
        <Route path="/f-off" component={FOff} />
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
