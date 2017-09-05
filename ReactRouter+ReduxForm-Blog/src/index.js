import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ReduxPromise from 'redux-promise';

// import App from './components/app';
import Posts from './components/posts';
import PostsNew from './components/postsNew';
import PostsShow from './components/postsShow';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    {/* <App /> */}
    <BrowserRouter>
      <div>
        <Switch> {/* Most specific top */}
          <Route path="/new" component={PostsNew} />
          <Route path="/:id" component={PostsShow} />
          <Route path="/" component={Posts} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
