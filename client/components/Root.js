import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from '../store';
import App from './App';
import Nav from './Nav';
import Footer from './Footer';
import Landing from './Landing';
import Login from './Login';
import Register from './Register';
import NotesPage from './NotesPage';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

/* redux integration with react-router: https://reacttraining.com/react-router/web/guides/redux-integration */

const Root = () =>  (
 <Router>

 <div className="container">
<Nav></Nav>
      <Switch>
        <Route exact path="/" component={Landing}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/register" component={Register}/>
        <Route exact path="/notes" component={NotesPage}/>
     </Switch>
     <div className="push"></div>
     <Footer></Footer>
     </div>
      
  </Router>
)

export default Root;