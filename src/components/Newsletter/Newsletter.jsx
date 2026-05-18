import React, { useState } from "react";
import "./Newsletter.css";

/**
 * Simple newsletter CTA form.
 * - Set REACT_APP_NEWSLETTER_ENDPOINT in .env (POST JSON { email })
 * - Or pass `endpoint` prop when mounting <Newsletter endpoint="https://..." />
 */
export default function Newsletter({ endpoint }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const api = endpoint || process.env.REACT_APP_NEWSLETTER_ENDPOINT || "";

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setStatus("error");
      return;
    }
    setStatus("sending");
    try {
      // POST JSON to endpoint. Endpoint must accept JSON { email }.
      const res = await fetch(api, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (!res.ok) throw new Error("Network response not ok");
      setStatus("success");
      setEmail("");
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <section className="newsletter" aria-labelledby="newsletter-title">
      <div className="newsletter__inner">
        <div className="newsletter__copy">
          <h3 id="newsletter-title">Join the mailing list</h3>
          <p>Get new mixes, shows and drops. No spam — unsubscribe anytime.</p>
        </div>

        <form className="newsletter__form" onSubmit={handleSubmit} aria-live="polite">
          <label htmlFor="newsletter-email" className="visually-hidden">Email address</label>
          <input
            id="newsletter-email"
            type="email"
            inputMode="email"
            placeholder="you@domain.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit" disabled={status === "sending"}>
            {status === "sending" ? "Joining…" : "Join"}
          </button>
        </form>

        <div className="newsletter__status" aria-live="polite">
          {status === "success" && <span className="newsletter__msg success">Thanks — check your inbox.</span>}
          {status === "error" && <span className="newsletter__msg error">Could not subscribe. Try again.</span>}
        </div>
      </div>
    </section>
  );
}