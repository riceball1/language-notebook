import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import App from './App';
import Main from './Main';
import Login from './Login';
import Register from './Register';

import { BrowserRouter as Router, Switch, Route, browserHistory, IndexRoute } from 'react-router-dom';


const Root = ({store}) =>  (
    <Provider store={store} >
    <Router history={browserHistory}>
        <Switch>
            <Route exact path="/" component={App} />
            <IndexRoute component={Main} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
        </Switch>
    </Router>
    </Provider>

)

export default root;