import React from "react";
import "./Contact.css";
import jFifteen from "../../assets/jFifteen.jpg";
import ContactForm from "../../components/ContactForm/ContactForm";

const Contact = () => {
  return (
    <main className="contact">
      <div
        className="contact__bg"
        aria-hidden="true"
        style={{ backgroundImage: `url(${jFifteen})` }}
      />
      {/* <section className="contact__hero">
        <div className="contact__intro">
          <h1 className="contact__title">Contact</h1>
        </div>
      </section> */}

      <section>
        <div className="contact__wall">
          <div className="contact__left" aria-hidden="false">
            <div className="contact__left-inner">
              <h2 className="contact__left-title">Get in touch</h2>
              <p className="contact__left-copy">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
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