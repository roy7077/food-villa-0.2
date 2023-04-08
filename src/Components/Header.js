import React from 'react'
import "../Style/header.css"
import '../App.css';

const Header=()=>{
  return (
    <div className='header'> 
      <img 
      className='logo'
      src='https://lh3.googleusercontent.com/p/AF1QipMf9w4RomHXrUkQKvrxtPdjp3SLadP05HDzXlH2=w1080-h608-p-no-v0'
      alt='logo'
      />
      
      <ul className='nav-bar'>
        <li>Home</li>
        <li>Contact</li>
        <li>Cart</li>
      </ul>

    </div>
  )
}

export default Header;