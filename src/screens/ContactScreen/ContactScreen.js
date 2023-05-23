import React from 'react';
import './ContactScreen.css';

const ContactScreen = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    alert('Thank you for your message! This is just a demo, but your message has been "submitted".');
  };

  return (
    <div className="contact-screen">
      <div className='contact-container'>
        <h1>Contact Us</h1>
        <form className="contact-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows="5" required></textarea>

          <button type="submit" className="contact-submit-btn">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ContactScreen;

