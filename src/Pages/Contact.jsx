import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Contact.css'; // Import custom styles for Contact page
import 'animate.css/animate.min.css'; // Import animate.css for animations

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to backend or email
    console.log('Form submitted:', formData);
    // Reset form fields
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <Container className="contact-page">
      <Row>
        <Col>
          <div className="contact-header">
            <h1 className="animate__animated animate__fadeInDown">Contact Me</h1>
            <p className="animate__animated animate__fadeIn">Let's get in touch!</p>
          </div>
          <div className="contact-info">
            <h2 className="animate__animated animate__fadeInLeft">Contact Information</h2>
            <ul>
              <li>
                <strong>Email:</strong> <a href="mailto:your-email@example.com">your-email@example.com</a>
              </li>
              <li>
                <strong>Phone:</strong> <a href="tel:+1234567890">+1 234-567-890</a>
              </li>
              <li>
                <strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/your-profile">LinkedIn Profile</a>
              </li>
            </ul>
          </div>
          <div className="contact-form animate__animated animate__fadeInRight">
            <h2>Contact Form</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Your Name:</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name} 
                  onChange={handleChange} 
                  required 
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Your Email:</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email} 
                  onChange={handleChange} 
                  required 
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message:</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows="5" 
                  value={formData.message} 
                  onChange={handleChange} 
                  required 
                ></textarea>
              </div>
              <button type="submit">Send Message</button>
            </form>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;
