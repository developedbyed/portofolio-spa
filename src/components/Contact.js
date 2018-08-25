import React from "react";
import ContactAnimation from "./ContactAnimation";

const Contact = () => (
  <div className="contact-wrapper">
    <div className="project-title">
      <p className="p-title"> Contact </p>
    </div>
    <div className="form-wrapper">
      <form
        className="contact-form"
        action="https://formspree.io/simo.edwin@yahoo.com"
        method="POST"
      >
        <label> Name</label>
        <input className="contact-input" type="text" name="name" required />
        <label> Email</label>
        <input
          className="contact-input"
          type="email"
          name="_replyto"
          required
        />
        <label> Description</label>
        <textarea className="contact-textarea" name="description" required />
        <button className="contact-button" type="submit" value="Send">
          Submit
        </button>
      </form>
    </div>
    <ContactAnimation />
  </div>
);

export default Contact;
