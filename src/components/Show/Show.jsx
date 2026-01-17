import React, { useEffect, useRef } from "react";
import "./Show.css";

function Show() {
  const id = process.env.REACT_APP_SONGKICK_ID || "10389354";
  const hostRef = useRef(null);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;

    // Create a single wrapper and insert the anchor into it so cleanup is simple
    const wrapper = document.createElement("div");
    wrapper.className = "songkick-wrapper";
    wrapper.innerHTML = `<a href="https://www.songkick.com/artists/${id}" class="songkick-widget" data-theme="dark" data-track-button="off" data-detect-style="off" data-background-color="rgb(0,0,0,1)" data-font-color="rgb(255,255,255,1)" data-button-bg-color="rgb(255,255,255,1)" data-button-text-color="rgb(0,0,0,1)" data-locale="en" data-other-artists="off" data-share-button="off" data-country-filter="off" data-rsvp="on" data-request-show="off" data-past-events="off" data-past-events-offtour="off" data-remind-me="off" style="display: none;"></a>`;

    // Append wrapper to host
    host.appendChild(wrapper);

    // Ensure injector script exists once on the page
    const scriptSrc = `//widget-app.songkick.com/injector/${id}`;
    let script = document.querySelector(`script[src="${scriptSrc}"]`);
    if (!script) {
      script = document.createElement("script");
      script.src = scriptSrc;
      script.async = true;
      document.body.appendChild(script);
    }

    return () => {
      // Remove only the wrapper (and its children). Leave global script in place.
      if (host.contains(wrapper)) host.removeChild(wrapper);
    };
  }, [id]);

  return <div className="hero__shows" ref={hostRef} />;
}

export default Show;