import { useForm, ValidationError } from "@formspree/react";
import React from "react";
import "./ContactForm.css";

function ContactForm() {
    const [state, handleSubmit] = useForm("xyzzbedg");
    if (state.succeeded) {
        return <p>Thanks for reaching for the best!</p>
}
    return (
        <form onSubmit={handleSubmit} autoComplete="on" className="contact" id="">
            <h2 className="contact__des">
                Feel free to reach out!
            </h2>
            <input
                id="firstname"
                type="firstname"
                name="firstname"
                placeholder=" First Name"
                // className="input__first"
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
                placeholder=" Last Name"
                // className="input__last"
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
                placeholder=" Email Address"
                className="input__email"
            />
            <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
            />
            <textarea
                id="message"
                name="message"
                placeholder=" Drop a note!"
                className="input__text"
            />
            <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
            />
            <button type="submit" disabled={state.submitting}>
                Submit
            </button>
        </form>
    );
};

export default ContactForm;