import React, { useEffect, useState } from "react";
import "./About.css";
import jFourteen from "../../assets/jFourteen.jpg";
import JThirteen from "../../assets/jThirteen.jpg";
import jEleven from "../../assets/jEleven.jpeg";
import DNP20 from "../../assets/DNP20.jpeg";
import JSixteen from "../../assets/jSixteen.jpg";
import Newsletter from "../../components/Newsletter/Newsletter";
import ScrollToTop from "react-scroll-to-top";

// Stats data
const STATS = [
  { label: "Years active", value: 10, suffix: "+" },
  { label: "Releases", value: 10, suffix: "+" },
  { label: "Shows", value: 40, suffix: "+" },
  { label: "Clients", value: 12, suffix: "+" }
];

// Testimonials data
const TESTIMONIALS = [
  {
    name: "Mac Taggard",
    role: "General Manager - Aero Club",
    text: "Our guests LOVE when Jose performs, because we all trust that he knows what he’s doing. The energy becomes electric and good vibes radiate."
  },
  {
    name: "Mark Rivera",
    role: "Label Owner — Drift Records",
    text: "Production quality is top-tier. Collaborating with Jose elevated the release — musicality and attention to detail are exceptional."
  },
  {
    name: "Sofia Alvarez",
    role: "Venue Director — The Hollow",
    text: "Always on time, communicative, and the crowd response is incredible. A go-to artist for curated nights."
  }
];

// Simple CountUp component
function CountUp({ to = 0, duration = 1200 }) {
  const [num, setNum] = useState(0);
  useEffect(() => {
    let raf;
    let start = null;
    function step(timestamp) {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      setNum(Math.round(progress * to));
      if (progress < 1) raf = requestAnimationFrame(step);
    }
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [to, duration]);
  return <>{num}</>;
}

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const el = document.querySelector(".about");
    const title = el?.querySelector(".about__bg--title");

    function update() {
      const atTop = window.scrollY < 50;
      if (el) el.classList.toggle("show-title", atTop);
      if (title) title.setAttribute("aria-hidden", atTop ? "false" : "true");
    }

    // initial state on mount (landing)
    update();

    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);

    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const scrollToContent = () => {
    const el = document.getElementById("about-content");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <div
        className="about__bg"
        aria-hidden="true"
        style={{ backgroundImage: `url(${jFourteen})` }}
      >
        <div className="about__bg--over">
          <h1 className="about__bg--title">
            Jose Flores
          </h1>
        </div> 
      </div>
      <main className="about">
        <section className="about__hero" aria-label="About landing">
          {/* <div className="about__intro">
            <h1 className="about__title">Jose Flores</h1>
            <h2 className="about__subtitle">Producer & Live Performer</h2>
            <p className="about__lead">
              I craft immersive soundscapes and raw live energy for stage and studio.
            </p>
            <p className="about__lead">
              Shows, collabs, and commissions available.
            </p>
            <div className="about__ctas">
              <a className="btn" href="/inquire">Contact</a>
            </div>
          </div> */}

          <button
            className="about__scroll"
            aria-label="Scroll to about content"
            onClick={scrollToContent}
            type="button"
          >
            ↓
          </button>
        </section>

        {/* Remaining page content — scrolled into view after the hero */}
        <div id="about-content" className="about__content">
          {/* (moved) remaining page content — profile + testimonials follow */}
          {/* Profile + Testimonials block: stats will render above the image/description */}
          <div className="about__profile-block">
            <section className="profile">
              {/* Stats moved here: same layout as before */}
              <div className="about__stats" aria-labelledby="stats-title">
                <h2 id="stats-title" className="sr-only">Key stats</h2>
                <div className="stats__grid">
                  {STATS.map((s) => (
                    <div className="stat" key={s.label}>
                      <div className="stat__value" aria-hidden="true">
                        <CountUp to={s.value} />{s.suffix}
                      </div>
                      <div className="stat__label">{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="profile__set">
                <div className="profile__grid">
                  <img src={DNP20} alt="Jose Flores portrait" className="profile__grid--image2" />
                  <div className="profile__description">
                    <h1 className="profile__description--title">Jose Flores</h1>
                    {/* <p className="profile__description--text">Bartender by day and DJ by night, you’ll find me spinning beats at some of the best bars and venues across San Diego, CA. Join me on a sonic journey through underground rhythms and timeless house classics.</p>
                    <p className="profile__description--text">My YouTube channel is your destination for electrifying Latin house mixes paired with captivating visuals, creating an immersive vibe you can feel.</p>
                    <p className="profile__description--text">From iconic tracks of the past to the freshest sounds of today, we’re curating the ultimate internet radio show experience.</p>
                    <p className="profile__description--text">🔥 Subscribe now and dive into the groove with Diagnostic & Friends — where the music does not stop.</p> */}
                    <p className="profile__description--text">Diagnostic is a San Diego–based DJ and producer known for high-energy sets that blend tech house, Latin grooves, and driving percussion. His sound is built around rolling basslines, infectious rhythms, and groove-first selections that keep dance floors moving from the first track to the last.</p>

                    <p className="profile__description--text">He’s built a reputation in San Diego’s nightlife scene by playing everything from neighborhood bars to packed clubs and private events. Every set is different, but the approach stays the same: read the room, build momentum, and keep people dancing.</p>

                    <p className="profile__description--text">Drawing inspiration from artists like Solardo, Carl Cox, Ramon Bedoya, and Kofla, Diagnostic delivers a mix of underground house, Latin-influenced grooves, and high-energy selections that balance raw club energy with tight, rhythmic flow.</p>

                    <p className="profile__description--text">Whether it’s a warehouse, nightclub, rooftop, or wedding, Diagnostic brings the same focus to every performance—creating a set that fits the room while keeping the energy consistent from start to finish. With live mixes on YouTube, SoundCloud, and Instagram (@diagnosticmusic), he’s continuing to grow his presence while representing San Diego’s underground dance music scene.</p>
                  </div>
                </div>
              </div>
            </section>

            <section className="about__testimonials" aria-labelledby="testimonials-title">
              <h2 id="testimonials-title" className="sr-only">What people say</h2>
              <div className="testimonials__row">
                {TESTIMONIALS.map((t, i) => (
                  <blockquote key={i} className="testimonial testimonial--compact">
                    <p className="testimonial__text">“{t.text}”</p>
                    <footer className="testimonial__cite">
                      <span className="testimonial__name">{t.name}</span>
                      <span className="testimonial__role">{t.role}</span>
                    </footer>
                  </blockquote>
                ))}
              </div>
            </section>
          </div>
        </div>{/* /#about-content */}
        <div>
          <Newsletter />
        </div>
      </main>

      <ScrollToTop smooth color="#fff" style={{ backgroundColor: '#000', borderRadius: '50%' }} />
    </>
  );
}