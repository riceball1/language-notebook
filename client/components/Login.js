import React from 'react';
import { Link } from 'react-router-dom';

class Login extends React.Component {
	constructor() {
		super();
		this.submitForm = this.submitForm.bind();
	}

	submitForm(e) {
		e.preventDefault();
		console.log('Submitting Form');
	}

    render() {
        return (
            <div className="wrapper">
				<form onSubmit={this.submitForm}>
				<h1>Login</h1>
				<label>username</label>
				<input type="text" name="username" ref={ref => this.usernameInput = ref}/>
				<label>password</label>
				<input type="password" name="password" ref={ref => this.passwordInput = ref}/>
					<button type="submit" onClick={this.submitForm} className="btn">submit</button>
					<Link to="/register"><button className="btn">no account?</button></Link>
				</form>
					
			</div>
        )
    }
}

export default Login;