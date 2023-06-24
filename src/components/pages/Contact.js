import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Contact() {
  return (
    <div>
    <section id="contact">
          <h2>Contact</h2>
          <form>
            <label for="name">Name:</label>
            <input type="text" name="name" required />
            <label for="email">Email:</label>
            <input type="email" name="email" required />
            <label for="message">Message:</label>
            <textarea name="message" required></textarea>
            <input type="submit" value="Send Message" />
          </form>
        </section>   
      <p></p>
    </div>
  );
}
