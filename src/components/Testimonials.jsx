import React from 'react'
import '../styles/Testimonials.css'

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Frequent Traveler',
    quote: 'SafeRoute has completely changed how I explore new cities. I feel so much more confident knowing Im taking the safest routes.',
  },
  {
    name: 'Michael Chen',
    role: 'Business Executive',
    quote: 'As someone who often travels for work, SafeRoute has become an essential tool in my travel kit. Its like having a local guide wherever I go.',
  },
  {
    name: 'Emily Rodriguez',
    role: 'Student',
    quote: 'I use SafeRoute every day on my way to university. It gives me and my parents peace of mind, especially during late-night study sessions.',
  },
]

export default function Testimonials() {
  return (
    <div id="testimonials" className="testimonials section">
      <div className="container">
        <h2 className="section-title">What Our Users Say</h2>
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card animate-fade-in">
              <p className="testimonial-quote">"{testimonial.quote}"</p>
              <div className="testimonial-author">
                <h3 className="testimonial-name">{testimonial.name}</h3>
                <p className="testimonial-role">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

