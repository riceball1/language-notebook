import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => (
    <header> 
    <nav>
        <ul>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/register">Register</Link></li>
        </ul>
        </nav>
    </header>
)

export default Nav;