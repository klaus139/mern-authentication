import React from 'react';
import {Link} from 'react-router-dom';
import { useAuth } from '../../context/authContext';
import './navbar.css';

const Navbar = () =>{
    const { logOut} = useAuth();

    const getSignature = localStorage.getItem('signature');

    const handleLogout = () =>{
        logOut();
    }

    return (
        <nav>
            <div className='logo-container'>
                <h1>Logo</h1>
            </div>
            <ul>
                <li className='active'> <Link to='/' className='link'>Home</Link></li>
                {
              !getSignature ?(<>
               <li><Link to="/login" className='link'>Login</Link></li>
            <li><Link to="/register" className='link'>Signup</Link></li>
              </>) : (<> <li><Link to="#" className='link' onClick={handleLogout}>Logout</Link></li></>)
            }
            </ul>
        </nav>
    )

}

export default Navbar;