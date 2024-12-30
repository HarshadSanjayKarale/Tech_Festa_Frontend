import React from 'react'
import '../styles/Navbar.css'

export default function Navbar({ darkMode, setDarkMode }) {
  return (
    <nav className="navbar">
      <div className="container">
        <a href="/" className="navbar-logo">
          SafeRoutes
        </a>
        <div className="navbar-links">
          <a href="#features" className="navbar-link">Features</a>
          <a href="#how-it-works" className="navbar-link">How It Works</a>
          <a href="#testimonials" className="navbar-link">Testimonials</a>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="navbar-toggle"
          >
            {darkMode ? '☀️' : '🌙'}
          </button>
        </div>
      </div>
    </nav>
  )
}

