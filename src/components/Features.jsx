import React from 'react'
import '../styles/Features.css'

const features = [
  {
    icon: '🛡️',
    title: 'Crime Data Analysis',
    description: 'Utilize historical crime data to identify safer routes.',
  },
  {
    icon: '🗺️',
    title: 'Real-time Updates',
    description: 'Get up-to-date information on potential risks in your area.',
  },
  {
    icon: '🔔',
    title: 'Customizable Alerts',
    description: 'Set personalized safety thresholds and receive instant notifications.',
  },
]

export default function Features() {
  return (
    <div id="features" className="features section">
      <div className="container">
        <h2 className="section-title">Key Features</h2>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card animate-fade-in">
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

