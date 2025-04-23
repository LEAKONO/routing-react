import React from 'react'

function Services() {
  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <ul className="flex justify-center items-center gap-6 flex-wrap">
        <li className="bg-white border rounded-xl shadow-md p-6 w-64 text-center hover:shadow-lg transition duration-300">
          <h2 className="text-xl font-semibold mb-2">Web Design</h2>
          <p className="text-gray-600">Modern UI/UX design for web apps</p>
        </li>
        <li className="bg-white border rounded-xl shadow-md p-6 w-64 text-center hover:shadow-lg transition duration-300">
          <h2 className="text-xl font-semibold mb-2">Web Development</h2>
          <p className="text-gray-600">Build full-stack web solutions</p>
        </li>
        <li className="bg-white border rounded-xl shadow-md p-6 w-64 text-center hover:shadow-lg transition duration-300">
          <h2 className="text-xl font-semibold mb-2">API Design</h2>
          <p className="text-gray-600">RESTful and secure API architecture</p>
        </li>
      </ul>
    </div>
  )
}

export default Services
