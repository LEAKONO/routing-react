import React from 'react'

function Contact() {
  return (
    <div className="flex justify-center items-center flex-col pt-10">
      <h2 className="text-blue-600 text-xl">Contact Us</h2>
      <p className="text-gray-600 mb-4">You can reach out via email or phone anytime.</p>

      <div className="flex gap-4">
        <a
          href="https://twitter.com/yourhandle"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          Twitter
        </a>
        <a
          href="https://linkedin.com/in/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-700 hover:underline"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-800 hover:underline"
        >
          GitHub
        </a>
      </div>
    </div>
  )
}

export default Contact
