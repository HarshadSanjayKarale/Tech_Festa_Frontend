import React from 'react'
import '../styles/Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">SafeRoute</h3>
            <p className="footer-description">Empowering safer travel through technology.</p>
          </div>
          <div className="footer-section">
            <h4 className="footer-subtitle">Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#features" className="footer-link">Features</a></li>
              <li><a href="#how-it-works" className="footer-link">How It Works</a></li>
              <li><a href="#testimonials" className="footer-link">Testimonials</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4 className="footer-subtitle">Contact Us</h4>
            <p className="footer-contact">Email: info@saferoute.com</p>
            <p className="footer-contact">Phone: (123) 456-7890</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="footer-copyright">&copy; {new Date().getFullYear()} SafeRoute. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

