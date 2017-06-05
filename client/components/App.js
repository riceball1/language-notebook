import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Root from '../components/Root';
import Nav from '../components/Nav';

class App extends Component {
   render() {
       return (
          <Root />
       )
   }
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(App);