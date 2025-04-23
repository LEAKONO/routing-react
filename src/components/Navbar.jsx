import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className="flex justify-end items-center gap-4 p-4 bg-white shadow-md">
      <Link to="/" className="text-blue-500 text-xl no-underline hover:underline">
        Home
      </Link>
      <Link to="/about" className="text-blue-500 text-xl no-underline hover:underline">
        About
      </Link>
      <Link to="/services" className="text-blue-500 text-xl no-underline hover:underline">
        Services
      </Link>
      <Link to="/contact" className="text-blue-500 text-xl no-underline hover:underline">
        Contact
      </Link>
    </div>
  )
}

export default Navbar
