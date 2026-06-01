import React, { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import "./ContactForm.css";

function ContactForm() {
    const [email, setEmail] = useState("");
    const [agreed, setAgreed] = useState(false);

    const [state, handleSubmit] = useForm("xyzzbedg");

        if (state.succeeded) {

            return <p className="reach__input--return">Thanks for your message! We've received it and will respond shortly!</p>
        }

    const onSubmit = (e) => {
        handleSubmit(e);
    }

    return (
        <div className="reach__backdrop">
            <form onSubmit={onSubmit} autoComplete="on" className="reach" id="">
            <h2 className="reach__des">
                Discover the sound -- master of vibes
            </h2>
            <input
                id="firstname"
                type="text"
                name="firstname"
                placeholder=" FIRST NAME"
                className="reach__input"
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
                className="reach__input"
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
                className="reach__input"
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
                className="reach__input"
            />
            <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
            />
            
            {/* Submit button (consent handled by cookie banner) */}
            <div className="reach__actions" style={{ marginTop: "0.75rem" }}>
                <button
                    type="submit"
                    disabled={state.submitting}
                    className="reach__btn"
                >
                    {state.submitting ? "Sending..." : "Send Message"}
                </button>
            </div>
            </form>
        </div>
    );
};

export default ContactForm;