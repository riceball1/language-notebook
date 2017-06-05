import React from 'react';
import { Link } from 'react-router-dom';

const Nav = ({match}) => (
    <header> 
    <nav>
        <ul>
            <li className="nav-brand"><Link to="/">Language Learning Notebook</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/register">Register</Link></li>
        </ul>
        </nav>
    </header>
)

export default Nav;