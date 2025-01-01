import React from 'react';
import "../styles/Features.css"

const featureCategories = [
  {
    title: "Core Safety Features",
    icon: "🛡️",
    features: [
      {
        icon: "🗺️",
        title: "Smart Route Planning",
        description: "Choose between Safest Route, Balanced Route, or Fastest Route with dynamic routing that avoids crime-prone areas."
      },
      {
        icon: "🎯",
        title: "Safety Heatmaps",
        description: "Visualize crime-prone areas with color-coded zones showing risk levels and crime density in real-time."
      },
      {
        icon: "⚡",
        title: "Real-Time Alerts",
        description: "Receive instant notifications about incidents near your route and get smart re-routing suggestions."
      },
      {
        icon: "🚗",
        title: "Multi-Modal Transport",
        description: "Tailored safety recommendations for walking, driving, and public transport modes."
      }
    ]
  },
  {
    title: "Smart Features",
    icon: "🧠",
    features: [
      {
        icon: "🌙",
        title: "Time-Aware Safety",
        description: "Dynamic safety scores that adapt based on time of day and current conditions."
      },
      {
        icon: "👥",
        title: "Crowdsourced Reports",
        description: "Community-driven incident reporting system to complement official crime data."
      },
      {
        icon: "🌦️",
        title: "Weather Integration",
        description: "Smart routing considering weather conditions and potential hazards."
      },
      {
        icon: "♿",
        title: "Accessibility Focus",
        description: "Routes optimized for differently-abled users with attention to lighting and safety."
      }
    ]
  },
  {
    title: "Emergency & Community",
    icon: "🆘",
    features: [
      {
        icon: "🚨",
        title: "SOS System",
        description: "One-touch emergency system with location sharing and nearest safe spot guidance."
      },
      {
        icon: "👮",
        title: "Law Enforcement Integration",
        description: "Direct collaboration with local authorities for real-time crime data and alerts."
      },
      {
        icon: "🏥",
        title: "Safe Zones",
        description: "Community-marked safe locations including police stations, hospitals, and fire stations."
      },
      {
        icon: "⌚",
        title: "Wearable Integration",
        description: "Smart alerts through wearable devices when approaching unsafe areas."
      }
    ]
  },
  {
    title: "Advanced Analytics",
    icon: "📈",
    features: [
      {
        icon: "📱",
        title: "Safety Dashboard",
        description: "Personal safety trends and insights about your frequently traveled areas."
      },
      {
        icon: "🔄",
        title: "Offline Support",
        description: "Download maps and safety data for reliable offline navigation."
      },
      {
        icon: "🌍",
        title: "Global Coverage",
        description: "Multi-city support with location-based customization for travelers."
      },
      {
        icon: "🔋",
        title: "Battery Optimization",
        description: "Smart power management with pre-downloaded routes for low battery situations."
      }
    ]
  },
  {
    title: "Future Innovation",
    icon: "🚀",
    features: [
      {
        icon: "🤖",
        title: "AI Companion",
        description: "Smart virtual assistant providing real-time safety recommendations during travel."
      },
      {
        icon: "🔒",
        title: "Blockchain Security",
        description: "Enhanced data security and transparency using blockchain technology."
      },
      {
        icon: "📷",
        title: "Drone Monitoring",
        description: "Integration with city surveillance systems for enhanced safety monitoring."
      },
      {
        icon: "🧮",
        title: "Smart Learning",
        description: "Route optimization using reinforcement learning based on driver behavior and road conditions."
      }
    ]
  }
];

export default function Features() {
  return (
    <div id="features" className="features section">
      <div className="container">
        <h2 className="section-title">Comprehensive Safety Features</h2>
        {featureCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="feature-category">
            <div className="category-header">
              <span className="category-icon">{category.icon}</span>
              <h3 className="category-title">{category.title}</h3>
            </div>
            <div className="features-grid">
              {category.features.map((feature, featureIndex) => (
                <div 
                  key={featureIndex} 
                  className="feature-card animate-fade-in"
                >
                  <div className="feature-icon">{feature.icon}</div>
                  <h4 className="feature-title">{feature.title}</h4>
                  <p className="feature-description">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}