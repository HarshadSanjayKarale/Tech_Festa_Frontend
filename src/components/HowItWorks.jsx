import React from 'react'
import '../styles/HowItWorks.css'

const steps = [
  {
    icon: '📱',
    title: 'Download the App',
    description: 'Get SafeRoute on your smartphone from the App Store or Google Play.',
  },
  {
    icon: '📍',
    title: 'Set Your Destination',
    description: 'Enter your destination and let SafeRoute calculate the safest route for you.',
  },
  {
    icon: '👍',
    title: 'Travel with Confidence',
    description: 'Follow the recommended route and receive real-time safety alerts.',
  },
]

export default function HowItWorks() {
  return (
    <div id="how-it-works" className="how-it-works section">
      <div className="container">
        <h2 className="section-title">How It Works</h2>
        <div className="steps-grid">
          {steps.map((step, index) => (
            <div key={index} className="step-card animate-fade-in">
              <div className="step-icon">{step.icon}</div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-description">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

