import React, { useEffect } from "react";

function Show() {

    useEffect(() => {

      const script = document.createElement("script");

      script.src = "//widget-app.songkick.com/injector/10389354";
      script.async = true;
      document.body.appendChild(script);

      return () => {

        document.body.removeChild(script);
      };
    }, []);

    return (
      <div>
        Show show
        <a
          href="https://www.songkick.com/artists/10389354"
          className="songkick-widget"
          data-theme="dark"
          data-track-button="off"
          data-detect-style="off"
          data-background-color="rgb(10,73,97,1)" 
          data-font-color="rgb(255,255,255,1)" 
          data-button-bg-color="rgb(36,36,36,1)" 
          data-button-text-color="rgb(255,255,255,1)"
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
      </div>
      );
    }

export default Show;