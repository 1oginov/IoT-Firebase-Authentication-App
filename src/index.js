// @flow

import * as React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';

import App from './components/App';
import createStore from './lib/createStore';
import reducer from './reducer';
import * as serviceWorker from './serviceWorker';

const container = document.getElementById('container');
const store = createStore(reducer);

if (!container) {
  throw new Error('Container is missing');
}

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  container,
);

serviceWorker.unregister();
