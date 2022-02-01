import React, { useState } from "react";
import { contact } from "../../portfolio";
import "./Contact.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  if (!contact.email) return null;

  const submitForm = () => {
    window.open(
      `mailto:${contact.email}?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(name)} (${encodeURIComponent(
        email
      )}): ${encodeURIComponent(message)}`
    );
  };

  return (
    <section className=" contact " id="contact">
      <div className="contact-container ">
        <div className="fields">
          {" "}
          <h2 className="contact-title">Contact</h2>
          <form className="contact-form">
            <div className="first-row">
              <input
                type="text"
                defaultValue=""
                value={name}
                size="35"
                id="contactName"
                name="contactName"
                placeholder="Name *"
                onChange={(e) => setName(e.target.value)}
              />

              <span className="invalid-feedback">Name is required</span>
            </div>
            <div className="second">
              <input
                type="text"
                defaultValue=""
                value={email}
                size="35"
                id="contactEmail"
                name="contactEmail"
                placeholder="Email *"
                onChange={(e) => setEmail(e.target.value)}
              />

              <span className="invalid-feedback">Email is Required</span>
            </div>
            <div className="third">
              <input
                type="text"
                defaultValue=""
                value={subject}
                size="35"
                id="contactSubject"
                name="contactSubject"
                placeholder="Subject"
                onChange={(e) => setSubject(e.target.value)}
              />
            </div>
            <div className="fourth">
              <textarea
                cols="50"
                rows="15"
                value={message}
                id="contactMessage"
                name="contactMessage"
                placeholder="Message *"
                onChange={(e) => setMessage(e.target.value)}
              />

              <span className="invalid-feedback">Message is required.</span>
            </div>
            <div className="submit-button">
              <button
                type="submit"
                className="color"
                style={{ cursor: "pointer" }}
                onClick={submitForm}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
