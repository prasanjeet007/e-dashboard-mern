import React from 'react'
import './Navbar.css';
import {Link} from 'react-router-dom';

export default function Navbar() {
  return (
    <React.Fragment>
        <ul className='navbar'>
            <li><Link to="/">Products</Link></li>
            <li><Link to="/add">Add Product</Link></li>
            <li><Link to="/update">Update Product</Link></li>
            <li><Link to="/profile">Profile</Link></li>
            <li><Link to="/signup">SignUp</Link></li>
            <li><Link to="/logout">Logout</Link></li>
        </ul>
    </React.Fragment>
  )
}
