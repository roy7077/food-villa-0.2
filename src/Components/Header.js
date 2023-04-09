import React, { useState } from 'react'
import "../Style/header.css"
import '../App.css';

const Header=()=>{
  const[loggedIn,setLoggedIn]=useState(false);
  return (
    <div className='header'> 
      <img 
      className='logo'
      src='https://lh3.googleusercontent.com/p/AF1QipMf9w4RomHXrUkQKvrxtPdjp3SLadP05HDzXlH2=w1080-h608-p-no-v0'
      alt='logo'
      />
      
      <ul className='nav-bar'>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Cart</li>

        {
        loggedIn?
        <button onClick={()=>{setLoggedIn(false)}}>LogOut</button> 
        : 
        <button onClick={()=>{setLoggedIn(true)}}>LogIn</button>
      }
      </ul>

      
    </div>
  )
}

export default Header;