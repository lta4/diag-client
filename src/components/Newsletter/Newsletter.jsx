import React from "react";
import { useForm } from "@formspree/react";
import "./Newsletter.css";

/**
 * Simple newsletter CTA form.
 * - Set REACT_APP_NEWSLETTER_ENDPOINT in .env (POST JSON { email })
 * - Or pass `endpoint` prop when mounting <Newsletter endpoint="https://..." />
 */
export default function Newsletter() {
  // replace "YOUR_FORM_ID" with the id from Formspree (looks like: mlezkqwy)
  const [state, handleSubmit] = useForm("xyzzbedg");

  // ensure errors is always an array so .length is safe
  const errors = Array.isArray(state.errors) ? state.errors : [];

  if (state.succeeded) {
    return (
      <div className="newsletter__success" role="status" aria-live="polite">
        Thanks — you’re subscribed!
      </div>
    );
  }

  return (
    <form className="newsletter__form" onSubmit={handleSubmit} aria-label="Subscribe to newsletter">
      <label htmlFor="email" className="sr-only">Email address</label>
      <input
        id="email"
        type="email"
        name="email"
        placeholder="you@example.com"
        required
        aria-required="true"
        className="newsletter__input"
      />
      <button type="submit" className="newsletter__submit" disabled={state.submitting}>
        {state.submitting ? "Sending…" : "Subscribe"}
      </button>
      {errors.length > 0 && (
        <div className="newsletter__error" role="alert" aria-live="polite">
          {errors.map((e, i) => (
            <div key={i}>{e.message || e.error || JSON.stringify(e)}</div>
          ))}
        </div>
      )}
    </form>
  );
}