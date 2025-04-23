import React from 'react'
import { Link } from 'react-router-dom'
import Services from './Services'
import Contact from './Contact'
import About from './About'
import Home from './Home'

function Navbar() {
  return (
    <div>
        <Link  path='/'to={Home}/>
        <Link path='/about' to={About}/>
        <Link path='/services' to={Services}/>
        <Link path='contact'to={Contact}/>
    </div>
  )
}

export default Navbar
