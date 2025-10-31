import React, { useEffect } from "react";
import jFifteen from "../../assets/jFifteen.jpg";
import "./Show.css";

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
        <>
          {/* <div className="show">
            <div className="show__wall">
            <img src={jFifteen} alt="" className="show__wall--image" />
            Show show
            </div>
          </div> */}
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
        </>
      );
    }
export default Show;