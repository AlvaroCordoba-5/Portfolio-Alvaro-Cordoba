import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { Link } from 'react-router-dom';
import './navbar.css'
function NavBar() {
  return (
    <>
    <div className='tags'>
      <h3>Alvaro Cordoba</h3>
      <div className='t'>
      <span>Home</span>
      <span>About</span>
      <span>Skills</span>
      <span>Projects</span>
      <span>Contact</span>
      </div>
    </div>
    
    </>
  )
}

export default NavBar