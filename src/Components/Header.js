import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import "../Style/header.css"
import '../App.css';

const Header=()=>{
  const[loggedIn,setLoggedIn]=useState(false);
  return (
    <div className='header'> 
      <h1 className="logo">
        FooD 😋 VilLa
      </h1>
      
      <ul className='nav-bar'>
        <li><Link to="/" className='l1'>Home</Link></li>
        <li><Link to="/about" className='l2'>About</Link></li>
        <li><Link to="/contact" className='l3'>Contact</Link></li>
        <li className='l4'>Cart</li>
        <li>
        {
        loggedIn?
        <button onClick={()=>{setLoggedIn(false)}}>LogOut</button> 
        : 
        <button onClick={()=>{setLoggedIn(true)}}>LogIn</button>
         }
        </li>
        
      </ul>

      
    </div>
  )
}

export default Header;