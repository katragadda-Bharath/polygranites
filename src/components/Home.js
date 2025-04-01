import React, { useState } from 'react';
import './Home.css';

const Home = () => {
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Format the message for WhatsApp
    const whatsappMessage = `Name: ${formData.name}%0A` +
      `Location: ${formData.location}%0A` +
      `Phone: ${formData.phone}%0A` +
      `Message: ${formData.message}`;

    // Create WhatsApp URL with the message
    const whatsappUrl = `https://wa.me/919014915068?text=${whatsappMessage}`;

    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank');

    // Clear the form
    setFormData({
      name: '',
      location: '',
      phone: '',
      message: ''
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <h1>Welcome to Jiyanshi Polygranites</h1>
        <p className="hero-subtitle">Transform Your Space with Premium Polygranite Solutions</p>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <h2>Why Choose Polygranite?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🔥</div>
            <h3>Fire Resistant</h3>
            <p>High resistance to fire and heat, ensuring safety in any environment</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">💧</div>
            <h3>Water Resistant</h3>
            <p>Excellent water resistance, perfect for wet areas and outdoor applications</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">⚡</div>
            <h3>Easy Installation</h3>
            <p>Simple and quick installation process, saving time and labor costs</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">⏳</div>
            <h3>Long Life</h3>
            <p>Durable and long-lasting, maintaining beauty for years to come</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🐜</div>
            <h3>Termite Proof</h3>
            <p>Completely resistant to termites and other pests, ensuring long-term protection</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🧹</div>
            <h3>Easy Cleaning</h3>
            <p>Simple to maintain with just regular cleaning, no special treatments needed</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🎨</div>
            <h3>Customizable Designs</h3>
            <p>Wide range of colors, patterns, and finishes to match your unique style</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🔄</div>
            <h3>Universal Application</h3>
            <p>Can be applied on any surface like Wood, Walls, POP, Plywood</p>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="applications-section">
        <h2>Where Polygranite Can Be Installed</h2>
        <div className="applications-grid">
          <div className="application-card">
            <h3>Interior Walls</h3>
            <ul>
              <li>Living Rooms</li>
              <li>Bedrooms</li>
              <li>Dining Areas</li>
              <li>Staircase Walls</li>
              <li>TV Unit Backdrops</li>
              <li>Corridors</li>
              <li>Office Rooms</li>
            </ul>
          </div>
          <div className="application-card">
            <h3>Kitchen & Bathroom</h3>
            <ul>
              <li>Kitchen Walls</li>
              <li>Kitchen Countertops</li>
              <li>Kitchen Backsplashes</li>
              <li>Bathroom Walls</li>
              <li>Bathroom Vanities</li>
              <li>Bathroom Backsplashes</li>
            </ul>
          </div>
          <div className="application-card">
            <h3>Commercial Spaces</h3>
            <ul>
              <li>Hospitals</li>
              <li>Schools</li>
              <li>Hotels</li>
              <li>Restaurants</li>
              <li>Cafes</li>
              <li>Gyms</li>
              <li>Marriage Halls</li>
              <li>Shopping Malls</li>
            </ul>
          </div>
          <div className="application-card">
            <h3>Furniture & Fixtures</h3>
            <ul>
              <li>Dining Tables</li>
              <li>Study Tables</li>
              <li>Wardrobes</li>
              <li>Cupboards</li>
              <li>Door Panels</li>
              <li>Window Frames</li>
            </ul>
          </div>
          <div className="application-card">
            <h3>Specialized Areas</h3>
            <ul>
              <li>False Ceilings</li>
              <li>Roof Ceilings</li>
              <li>Kids' Rooms</li>
              <li>Play Areas</li>
              <li>Entertainment Areas</li>
              <li>Theaters</li>
            </ul>
          </div>
          <div className="application-card">
            <h3>Exterior Applications</h3>
            <ul>
              <li>Building Facades</li>
              <li>Outdoor Fences</li>
              <li>Decorative Signage</li>
              <li>Window Frames</li>
              <li>Door Panels</li>
              <li>Flooring</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <h2>Contact Us</h2>
        <div className="contact-info">
          <div className="contact-details">
            <h3>Get in Touch</h3>
            <p><strong>Address:</strong> Palvancha</p>
            <p><strong>Phone:</strong> 9014915068</p>
          </div>
          <div className="contact-form">
            <h3>Send us a Message</h3>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="location"
                placeholder="Your Location"
                value={formData.location}
                onChange={handleChange}
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="Your Phone"
                value={formData.phone}
                onChange={handleChange}
              />
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
              />
              <button type="submit">Send Message on WhatsApp</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 
