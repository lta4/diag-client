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
                Whether you’re booking a DJ set, commissioning a mix, or planning a creative collab, I tailor the vibe to the space and crowd.
              </p>
              <p className="contact__left--copy">
                When you reach out, please include: date, venue, expected crowd size, and a short note about the vibe or budget. I’ll get back within 48 hours with availability and a sample plan.
              </p>
              <p className="contact__left--copy">
                Use the form or DM on socials. Let’s make something that moves people.
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