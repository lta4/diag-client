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