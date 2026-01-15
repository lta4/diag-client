import React, { useEffect, useRef } from "react";
import "./Show.css";

function Show() {
  const id = process.env.REACT_APP_SONGKICK_ID || "10389354";
  const hostRef = useRef(null);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;

    // create anchor and script like the working index.html embed
    const anchor = document.createElement("a");
    anchor.href = `https://www.songkick.com/artists/${id}`;
    anchor.className = "songkick-widget";
    anchor.setAttribute("data-theme", "dark");
    anchor.setAttribute("data-track-button", "off");
    anchor.setAttribute("data-detect-style", "off");
    anchor.setAttribute("data-background-color", "rgb(0,0,0,1)");
    anchor.setAttribute("data-font-color", "rgb(255,255,255,1)");
    anchor.setAttribute("data-button-bg-color", "rgb(255,255,255,1)");
    anchor.setAttribute("data-button-text-color", "rgb(0,0,0,1)");
    anchor.setAttribute("data-locale", "en");
    anchor.setAttribute("data-other-artists", "off");
    anchor.setAttribute("data-share-button", "off");
    anchor.setAttribute("data-country-filter", "off");
    anchor.setAttribute("data-rsvp", "on");
    anchor.setAttribute("data-request-show", "off");
    anchor.setAttribute("data-past-events", "off");
    anchor.setAttribute("data-past-events-offtour", "off");
    anchor.setAttribute("data-remind-me", "off");
    // keep the anchor display none initially like your static embed
    anchor.style.display = "none";

    const script = document.createElement("script");
    script.src = `//widget-app.songkick.com/injector/${id}`;
    script.async = true;

    host.appendChild(anchor);
    host.appendChild(script);

    return () => {
      if (host.contains(script)) host.removeChild(script);
      if (host.contains(anchor)) host.removeChild(anchor);
    };
  }, [id]);

  return <div className="show-widget-host" ref={hostRef} />;
}

export default Show;