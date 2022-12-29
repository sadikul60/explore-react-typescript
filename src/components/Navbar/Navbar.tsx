import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
const Navbar = () => {
    return (
        <div className='navbar'>
            <ul>
                <li><Link className='link' to='/blog'>Blog</Link></li>
                <li><Link className='link' to='/login'>Login</Link></li>
            </ul>
        </div>
    );
};

export default Navbar;