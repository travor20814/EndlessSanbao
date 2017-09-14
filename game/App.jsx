/* eslint no-param-reassign: [0] */

import React from 'react';
import thunk from 'redux-thunk';
import debug from 'debug';
import { AppContainer } from 'react-hot-loader';
import {
  createStore,
  compose,
  combineReducers,
  applyMiddleware,
} from 'redux';
import {
  Provider,
} from 'react-redux';
import createBrowserHistory from 'history/createBrowserHistory';
import {
  routerReducer,
  routerMiddleware,
  ConnectedRouter,
} from 'react-router-redux';

// component
import MainBoard from './containers/MainBoard.jsx';

// Reducers
import Game from './reducers/game.js';

// Debug mode
if (process.env.NODE_ENV !== 'production') {
  debug.enable('Sanbao:*');
}

const history = createBrowserHistory();

export const store = createStore(
  combineReducers({
    Game,
    routing: routerReducer,
  }),
  {},
  compose(
    applyMiddleware(
      thunk,
      routerMiddleware(history),
    ),
  ),
);

export default (
  <AppContainer>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <MainBoard />
      </ConnectedRouter>
    </Provider>
  </AppContainer>
);
