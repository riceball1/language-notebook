import React from 'react';
import { Link } from 'react-router-dom';

class Login extends React.Component {
    render() {
        return (
            <div>
			<h1>Login</h1>
				<form onSubmit={this.submitForm}>
				<label>username</label>
				<input type="text" name="username" ref={ref => this.usernameInput = ref}/>
				<label>password</label>
				<input type="password" name="password" ref={ref => this.passwordInput = ref}/>
					<button type="submit" onClick={this.submitForm} className="btn">submit</button>
					<Link to="/signup"><button className="btn">no account?</button></Link>
				</form>
					
			</div>
        )
    }
}

export default Login;