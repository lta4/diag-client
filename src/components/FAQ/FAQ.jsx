import React, { useState } from "react";
import "./FAQ.css";

export default function FAQ({ items }){
  const defaultItems = [
    { q: "How do I book a show?", a: "Email the booking contact or use the booking form linked on the site." },
    { q: "What is your rider?", a: "Basic rider available on request — please contact the booking email for details." },
    { q: "Do you travel for festivals?", a: "Yes — travel and accommodation are typically covered. Reach out to discuss specifics." },
  ];
  const faqs = items && items.length ? items : defaultItems;
  const [open, setOpen] = useState(null);
  const toggle = (i) => setOpen(open === i ? null : i);

  return (
    <section className="faq" aria-labelledby="faq-title">
      <h2 id="faq-title" className="faq__title">FAQ</h2>
      <ul className="faq__list" role="list">
        {faqs.map((it, i) => {
          const panelId = `faq-panel-${i}`;
          const btnId = `faq-btn-${i}`;
          const isOpen = open === i;
          return (
            <li key={i} className="faq__item">
              <button
                id={btnId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                className="faq__question"
                onClick={() => toggle(i)}
                onKeyDown={(e) => {
                  if (e.key === "ArrowDown") e.preventDefault(); // placeholder for any future focus handling
                }}
              >
                <span className="faq__q-text">{it.q}</span>
                <span className={`faq__chev ${isOpen ? "is-open" : ""}`} aria-hidden="true">▾</span>
              </button>
              <div
                id={panelId}
                role="region"
                aria-labelledby={btnId}
                className={`faq__answer ${isOpen ? "is-open" : ""}`}
              >
                <div className="faq__answer-inner">{it.a}</div>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}