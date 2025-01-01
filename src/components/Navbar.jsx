import React from 'react';
import { SunIcon, MoonIcon } from 'lucide-react';
import '../styles/Navbar.css'; // Import your CSS file for styling

export default function Navbar({ darkMode, setDarkMode }) {
  return (
    <nav className="navbar">
      <div className="container">
        {/* Logo */}
        <a href="/" className="navbar-logo">
          SafeRoutes
        </a>
        
        {/* Navigation Links */}
        <div className="navbar-links">
          <a href="#features" className="navbar-link">Features</a>
          <a href="#how-it-works" className="navbar-link">How It Works</a>
          <a href="#testimonials" className="navbar-link">Testimonials</a>

          {/* Dark Mode Toggle Button */}
            {/* Dark Mode Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-full ${
                darkMode 
                  ? 'bg-gray-900 hover:bg-gray-800' 
                  : 'bg-white hover:bg-gray-50'
              } border border-gray-200 dark:border-gray-700 transition-all duration-200 ease-in-out shadow-sm`}
              aria-label="Toggle dark mode"
            >
              {darkMode ? (
                <SunIcon className="w-6 h-6 text-white" />
              ) : (
                <MoonIcon className="w-6 h-6 text-gray-900" />
              )}
            </button>


        </div>
      </div>
    </nav>
  );
}
