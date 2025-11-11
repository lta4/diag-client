import React, { useEffect } from "react";
import "./Show.css";

function Show() {

    const id = process.env.REACT_APP_SONGKICK_ID || '10389354';

    useEffect(() => {

      const script = document.createElement("script");

      script.src = `//widget-app.songkick.com/injector/${id}`;
      script.async = true;
      document.body.appendChild(script);

      return () => {

        document.body.removeChild(script);
      };
    }, []);

    return (
        <>
          <a
            href={`https://www.songkick.com/artists/${id}`}
            className="songkick-widget"
            data-theme="dark"
            data-track-button="off"
            data-detect-style="off"
            data-background-color="rgb(0,0,0,1)" 
            data-font-color="rgb(191,191,191,1)" 
            data-button-bg-color="rgb(255,255,255,1)" 
            data-button-text-color="rgb(0,0,0,1)"
            data-locale="en"
            data-other-artists="off"
            data-share-button="off"
            data-country-filter="off"
            data-rsvp="on"
            data-request-show="off"
            data-past-events="off"
            data-past-events-offtour="off"
            data-remind-me="off"
            style={{ display: "none" }}
          >
            TOUR DATES
          </a>
        </>
      );
    }
export default Show;