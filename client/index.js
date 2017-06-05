import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import store from './store';
import { Provider } from 'react-redux';


import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

/** Components **/
// import Nav from './components/Nav';
// import Footer from './components/Footer';
// import Main from './components/Main';
// import Login from './components/Login';
// import Register from './components/Register';


require('./css/style.scss');




render( <Provider store={store}>
  <App />
  </Provider>,
    document.getElementById('root')
)