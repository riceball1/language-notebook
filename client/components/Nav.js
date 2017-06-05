import React from 'react';
import { Link } from 'react-router-dom';

const Nav = ({match}) => (
    <header> 
    <nav>
        <ul>
            <li className="nav-brand"><Link to="/">LL Notebook</Link></li>
            <li><Link to="/notes">Notes</Link></li>
            <li><Link to="/register">Register</Link></li>
            <li><Link to="/login">Login</Link></li>
        </ul>
        </nav>
    </header>
)

export default Nav;