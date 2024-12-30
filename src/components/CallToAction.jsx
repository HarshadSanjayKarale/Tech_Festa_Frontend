import React from 'react'
import '../styles/CallToAction.css'

export default function CallToAction() {
  return (
    <div className="cta section">
      <div className="container">
        <h2 className="section-title">Ready to Travel Safely?</h2>
        <p className="cta-description">Download SafeRoute now and start your journey with confidence.</p>
        <div className="cta-buttons">
          <button className="cta-button animate-pulse">
            Download for iOS
          </button>
          <button className="cta-button animate-pulse">
            Download for Android
          </button>
        </div>
      </div>
    </div>
  )
}

