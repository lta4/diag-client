import React, { useState, useEffect, useRef } from "react";
import "./Gig.css"
import BGbackground from "../../assets/BGbackground.png";
import jOneSlate from "../../assets/jOneSlate.jpg";
import jTwo from "../../assets/jTwo.jpg";
import jFour from "../../assets/jFour.jpg";
import DNP8 from "../../assets/DNP8.jpeg";
import DNP50 from "../../assets/DNP50.jpeg";
import jOne from "../../assets/jOne.jpg";
import HeroVideo from "../../components/HeroVideo/HeroVideo";
import videoLoop from "../../assets/DiagB1.MP4"; // add your file
// import videoPoster from "../../assets/gig-poster.jpg" // optional poster
import Show from "../../components/Show/Show";
import Newsletter from "../../components/Newsletter/Newsletter";
import heroImage from "../../assets/jOneSlate.jpg"; // change to the file you want
import FAQ from "../../components/FAQ/FAQ";

const Gig = () => {
    const carouselRef = useRef(null);
    const [index, setIndex] = useState(0);
    const [paused, setPaused] = useState(false);

    // Add more images here as needed
    const images = [ DNP8, DNP50, jOne/*, otherImage1, otherImage2 */ ];

    useEffect(() => {
      if (paused || images.length <= 1) return;
      const t = setInterval(() => setIndex(i => (i + 1) % images.length), 4000);
      return () => clearInterval(t);
    }, [paused, images.length]);

    const prev = () => setIndex(i => (i - 1 + images.length) % images.length);
    const next = () => setIndex(i => (i + 1) % images.length);
    const goTo = (n) => setIndex(Math.max(0, Math.min(n, images.length - 1)));

    const onKey = (e) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };

    return (
      <main className="gig">
        {/* fluid inner container so content aligns and flows */}
        <div className="gig__inner">
          {/* hero / top image already present */}
          {/* content grid: main column + optional rail (automatically collapses on mobile) */}
          <div className="gig__layout">
            <section className="gig__main">
              {/* keep your top image / video / gallery here */}
              {/* ...existing hero / top image / carousel markup ... */}
              <div className="gig__top-image" aria-hidden="false">
                <img src={heroImage} alt="Featured banner" />
              </div>
              {/* decorative full-viewport black band behind the header */}
              <div className="gig__bg" aria-hidden="true" />
              {/* existing header / content follows */}
              <header className="gig__header">
                <HeroVideo src={videoLoop} loopEnd={20} />
                <div className="gig__header-content">
                  <h2 className="gig__header--description">From underground clubs to curated events, Diagnostic delivers immersive electronic experiences built around sound, atmosphere, and connection.</h2>
                  {/* optional CTA */}
                </div>
              </header>
              <section className="gig__show">
                <div className="gig__show--container">
                  <Show />
                </div>
              </section>
              <section className="gig__wall">
                <div
                  className="gig__carousel"
                  ref={carouselRef}
                  tabIndex={0}
                  onKeyDown={onKey}
                  onMouseEnter={() => setPaused(true)}
                  onMouseLeave={() => setPaused(false)}
                  onFocus={() => setPaused(true)}
                  onBlur={() => setPaused(false)}
                  aria-roledescription="carousel"
                  aria-label="Featured images"
                >
                  <div
                    className="gig__carousel-track"
                    style={{ transform: `translateX(-${index * 100}%)` }}
                  >
                    {images.map((src, i) => (
                      <div className="gig__carousel-slide" key={i}>
                        <img
                          src={src}
                          alt={`Featured ${i + 1}`}
                          loading="lazy"
                          decoding="async"
                        />
                      </div>
                    ))}
                  </div>

                  {images.length > 1 && (
                    <>
                      <button className="gig__carousel-prev" onClick={prev} aria-label="Previous slide">‹</button>
                      <button className="gig__carousel-next" onClick={next} aria-label="Next slide">›</button>

                      <div className="gig__carousel-indicators" role="tablist" aria-label="Slide dots">
                        {images.map((_, i) => (
                          <button
                            key={i}
                            className={`gig__carousel-dot ${i === index ? "is-active" : ""}`}
                            onClick={() => goTo(i)}
                            aria-label={`Go to slide ${i + 1}`}
                            aria-selected={i === index}
                            role="tab"
                          />
                        ))}
                      </div>
                    </>
                  )}
                </div>
              </section>
            </section>

            <aside className="gig__rail" aria-hidden="false">
              {/* compact rail: upcoming shows / CTA / small widgets */}
              {/* reuse existing components like UpcomingShows, Newsletter CTA, etc. */}
            </aside>
          </div>

          {/* FAQ and other informational blocks flow full width under the grid */}
          <FAQ />
        </div>

        {/* existing footer / newsletter placement remains unchanged */}
        <section className="gig__news">
          <div className="gig__news--container">
            <Newsletter />
          </div>
        </section>
      </main>
    );
};  

export default Gig;