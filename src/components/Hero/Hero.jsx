import React, { useEffect } from "react";
import "./Hero.css";
import Header from "../Header/Header";
import GWDiag from "../../assets/GWDiag.png";
import jThirteen from "../../assets/jThirteen.jpg";
// import { Link } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";

const Hero = () => {
  useEffect(() => {
    // ensure landing starts at the top so the fixed background is fully visible
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* background stack: jThirteen (base) then GWDiag (overlay) — both fixed to viewport */}
      <div
        className="hero__bg"
        aria-hidden="true"
        style={{ backgroundImage: `url(${jThirteen})` }}
      />
      <div
        className="hero__diag"
        aria-hidden="true"
        style={{ backgroundImage: `url(${GWDiag})` }}
      />

      <div className="hero" id="home">
        <div className="hero__container">
          <Header />
          <div className="hero__wall">
            <div className="hero__bg--over">
              <div
                className="hero__bg--title"
                aria-hidden="true"
                /* decorative title — no inline background so fixed layers are sole images */
              >
                {/* decorative title — no inline background so fixed layer is sole image */}
              </div>
            </div>
          </div>

          <ScrollToTop
            smooth
            color="#fff"
            style={{ backgroundColor: "#000", borderRadius: "50%" }}
          />
        </div>
      </div>
    </>
  );
};

export default Hero;