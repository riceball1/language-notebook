import React from 'react';
import { Link } from 'react-router-dom';

class Register extends React.Component {
	constructor(props) {
		super(props);
		this.submitForm = this.submitForm.bind(this);
		
	}

	submitForm(e) {
		e.preventDefault();
		console.log('Registering');
	}

	render() {
		return (
			<div className="wrapper">
		
				<form onSubmit={this.submitForm}>
				<h1>Register</h1>
					<label>username</label>
					<input type="text" name="username" ref={ref => this.usernameInput = ref} required="required"/>
					<label>full name</label>
					<input type="text" name="fullname" ref={ref => this.fullnameInput = ref} required="required"/>
					<label>email</label>
					<input type="email" name="email" ref={ref => this.emailInput = ref} required="required"/>
					<label>password</label>
					<input type="password" name="password" ref={ref => this.passwordInput = ref} required="required"/>
					<label>confirm password</label>
					<input type="password" name="password2" ref={ref => this.password2Input = ref} required="required"/>
					<button type="submit" onClick={this.submitForm} className="btn">submit</button>
					<Link to="/login"><button className="btn">already have an account?</button></Link>
				</form>
					
			</div>
		)
	}
}

export default Register;