import React from 'react'
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'


const Navbar = () => {
  return (
    <div>
        <nav>
            <ul>
                <NavLink to="/" style={({ isActive }) => ({ color: isActive ? 'red' : 'black' })}>Home</NavLink>
                <NavLink to="/about" style={({ isActive }) => ({ color: isActive ? 'red' : 'black' })}>About</NavLink>
                <NavLink to="/contact" style={({ isActive }) => ({ color: isActive ? 'red' : 'black' })}>Contact</NavLink>
            </ul>
        </nav>
      
    </div>
  )
}

export default Navbar
