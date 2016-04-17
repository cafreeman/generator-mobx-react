import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Store } from './Store';
import App from './components/App';

const root = document.createElement('div');
root.id = 'app';
document.body.appendChild(root);

const store = new Store();

ReactDOM.render(
  <App store={ store } />,
  document.querySelector('#app')
);
