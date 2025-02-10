import React from "react";

function Contact() {
  // About, Contact, Projects components all similar
  return (
    <section id="contact">
      <h2>Contact</h2>
      <p>Feel free to connect with me!.</p>
      <ul>
        <li>
          <a
            href="https://www.linkedin.com/in/kevin-p-gray/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </li>
        <li>
          <a href="mailto:kevingray.dev@gmail.com">kevingray.dev@gmail.com</a>
        </li>
      </ul>
    </section>
  );
}

export default Contact;
