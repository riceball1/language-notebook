import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from '../store';
import App from './App';
import Nav from './Nav';
import Footer from './Footer';
import Main from './Main';
import Landing from './Landing';
import Login from './Login';
import Register from './Register';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


const Root = () =>  (
 <Router>
    <div className="wrapper">
    <Nav></Nav>
      <Switch>
        <Route exact path="/" component={Landing}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/register" component={Register}/>
     </Switch>
     <Footer></Footer>
     </div>
  </Router>
)

export default Root;