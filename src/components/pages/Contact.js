import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Contact() {
  return (
    <div>
    <section id="contact">
  <h2>Contact</h2>
  <ul>
    <li>
      <form>
        <label for="name">Name:</label>
        <input type="text" name="name" required />
      </form>
    </li>
    <li>
      <form>
        <label for="email">Email:</label>
        <input type="email" name="email" required />
      </form>
    </li>
    <li>
      <form>
        <label for="message">Message:</label>
        <textarea name="message" required></textarea>
      </form>
    </li>
    <li>
      <form>
        <input type="submit" value="Send Message" />
      </form>
    </li>
  </ul>
</section>
</div>
  );
};