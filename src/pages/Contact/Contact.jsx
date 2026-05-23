import React from "react";
import "./Contact.css";
import ContactForm from "../../components/ContactForm/ContactForm";

const Contact = () => {
    return (
        <>
            <main className="contact">
                <section className="contact__hero">
                    <div className="contact__intro">
                        <h1 className="contact__title">Contact</h1>
                        <ContactForm />
                    </div>
                </section>
            </main>
        </>
    );
};

export default Contact;