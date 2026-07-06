import React, { useState, useEffect } from "react";
import { useForm, ValidationError } from "@formspree/react";
import "./ContactForm.css";

function ContactForm() {
    const [email, setEmail] = useState("");
    const [agreed, setAgreed] = useState(false);

    const [state, handleSubmit] = useForm("xyzzbedg");
    const [serverErrors, setServerErrors] = useState([]);
    const [unblockLink, setUnblockLink] = useState(null);

    useEffect(() => {
        if (state.errors && state.errors.length) {
            const msgs = state.errors.map((e) => (e.message ? e.message : JSON.stringify(e)));
            setServerErrors(msgs);
            // detect Formspree unblock link in any returned message
            const joined = msgs.join(" ");
            const m = joined.match(/https?:\/\/\S*formspree\.io\/unblock\/\S+/i);
            setUnblockLink(m ? m[0] : null);
        } else {
            setServerErrors([]);
            setUnblockLink(null);
        }
    }, [state.errors]);

        if (state.succeeded) {

            return <p className="reach__input--return">Thanks for your message! We've received it and will respond shortly!</p>
        }

    const onSubmit = (e) => {
        handleSubmit(e);
    }

    return (
        <div className="reach__backdrop">
            {serverErrors.length > 0 && (
                <div className="reach__server-errors" role="alert" aria-live="assertive" style={{ color: "#ffdede", marginBottom: "0.5rem" }}>
                    {serverErrors.map((m, i) => (
                        <div key={i}>{m}</div>
                    ))}
                    {unblockLink && (
                        <div style={{ marginTop: "0.5rem" }}>
                            If this message mentions unblocking, you can follow this link to resolve it:{" "}
                            <a href={unblockLink} target="_blank" rel="noreferrer noopener">{unblockLink}</a>
                        </div>
                    )}
                </div>
            )}
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