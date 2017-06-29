import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import { ModuleProvider } from 'redux-modules';
import App from './components/app';
import Secret from './components/secret';
import Authentication_require from './components/require_authentication'
import store from './store'


ReactDOM.render(
  <ModuleProvider store={store}>
    <Router history = {browserHistory}>
      <Route path="/" component={App}>
        <Route path="secret" component={Authentication_require(Secret)}/>
      </Route>
    </Router>
  </ModuleProvider>
  , document.querySelector('.container'));
