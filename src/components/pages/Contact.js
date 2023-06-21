import React from 'react';

export default function Contact() {
  return (
    <div>
      <h1>Contact Page</h1>
      <section>
          <form>
         <label htmlFor="name">Name:</label>
         <input type="text" name="name" id="name" required />
         <label htmlFor="email">Email:</label>
         <input type="email" name="email" id="email" required />
         <label htmlFor="message">Message:</label>  
         <textarea name="message" id="message" required></textarea>
         <input type="submit" value="Send Message" />
          </form>
        </section>

      
      <p></p>
    </div>
  );
}
