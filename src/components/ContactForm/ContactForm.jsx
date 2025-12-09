import { useForm, ValidationError } from "@formspree/react";
import React from "react";
import "./ContactForm.css";

function ContactForm() {
    const [state, handleSubmit] = useForm("xyzzbedg");
    if (state.succeeded) {

        return <p className="contact__input--return">Thanks for your message! We've received it and will respond shortly!</p>
}
    return (
        <div className="contact__backdrop">
            <form onSubmit={handleSubmit} autoComplete="on" className="contact" id="">
            <h2 className="contact__des">
                Discover the sound -- master of vibes
            </h2>
            <input
                id="firstname"
                type="firstname"
                name="firstname"
                placeholder=" FIRST NAME"
                className="contact__input"
            />
            <ValidationError
                prefix="First Name"
                field="firstname"
                errors={state.errors}
            />
            <input 
                id="lastname"
                type="lastname"
                name="lastname"
                placeholder=" LAST NAME"
                className="contact__input"
            />
            <ValidationError
                prefix="Last Name"
                field="lastname"
                errors={state.errors}
            />
            <input
                id="email"
                type="email"
                name="email"
                placeholder=" EMAIL"
                className="contact__input"
            />
            <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
            />
            <textarea
                id="message"
                name="message"
                placeholder=" DROP A NOTE"
                className="contact__input"
            />
            <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
            />
            <button type="submit" disabled={state.submitting} className="contact__btn">
                Submit
            </button>
            </form>
        </div>
    );
};

export default ContactForm;