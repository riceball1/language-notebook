import React from 'react';
import Footer from './Footer';
import Nav from './Nav';

class App extends React.Component {
    render() {
        return (
            <div className="main">
                <Nav />
                {this.props.children}
                <Footer />
            </div>


        )
    }
}

export default App;