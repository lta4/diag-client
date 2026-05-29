import React from "react";
import "./Contact.css";
import jFifteenInk from "../../assets/jFifteenInk.jpg";
import ContactForm from "../../components/ContactForm/ContactForm";

const Contact = () => {
  return (
    <main className="contact">
      <section className="contact__hero">
        <div className="contact__intro">
          <h1 className="contact__title">Contact</h1>
        </div>
      </section>

      <section>
        {/* use container background-image so cover is reliable */}
        <div
          className="contact__wall"
          style={{ backgroundImage: `url(${jFifteenInk})` }}
        >
          <div className="contact__form-overlay" aria-hidden={false}>
            <div className="contact__form-card">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;