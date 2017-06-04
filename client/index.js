import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import App from './components/App';
import Login from './components/Login';
import Register from './components/Register';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

require('./css/style.scss');

const routes = (
    <Router>
        <Switch>
            <Route exact path="/" component={App} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
        </Switch>
    </Router>

)

render( routes,
    document.getElementById('root')
)