import React, { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import "./ContactForm.css";

function ContactForm() {
    const [email, setEmail] = useState("");
    const [agreed, setAgreed] = useState(false);

    const [state, handleSubmit] = useForm("xyzzbedg");

        if (state.succeeded) {

            return <p className="contact__input--return">Thanks for your message! We've received it and will respond shortly!</p>
        }

    const onSubmit = (e) => {
        if (!agreed) {
            e.preventDefault();
            //simple UX feedback -  replace toast if you have one
            alert("You must agree to the Privacy Policy before submitting.");
            return;
        }
        //pass event to Formspree handle
        handleSubmit(e);
    }

    return (
        <div className="contact__backdrop">
            <form onSubmit={onSubmit} autoComplete="on" className="contact" id="">
            <h2 className="contact__des">
                Discover the sound -- master of vibes
            </h2>
            <input
                id="firstname"
                type="text"
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
                type="text"
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
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

            <label className="contact__consent">
                    <input
                        type="checkbox"
                        name="consent"
                        checked={agreed}
                        onChange={(e) => setAgreed(e.target.checked)}
                        required
                    />
                    <span style={{ fontSize: "0.9rem" }}>I agree to the <a href="/privacy" target="_blank" rel="noopener noreferrer" onClick={(e)=>e.stopPropagation()}>Privacy Policy</a></span>
                </label>
            
                <button type="submit" disabled={!agreed || state.submitting} className="contact__btn" style={{ marginTop: "0.75rem" }}>
                    {state.submitting ? "Sending..." : "Submit"}
                </button>
            </form>
        </div>
    );
};

export default ContactForm;