import { useEffect, useState } from "react";
import "./About.css";
import JThirteen from "../../assets/jThirteen.jpg";
import JSixteen from "../../assets/jSixteen.jpg";
import ScrollToTop from "react-scroll-to-top";

const TIMELINE = [
  { year: "2025", title: "New Album Release", text: "Released the latest studio album — a blend of live and electronic textures." },
  { year: "2023", title: "Regional Tour", text: "Played 30+ shows across the west coast, focusing on immersive live sets." },
  { year: "2021", title: "Debut EP", text: "Self-released a debut EP that landed on several indie playlists." },
  { year: "2019", title: "Residency", text: "Started a monthly residency showcasing new talent and collaborative sets." }
];

const SKILLS = [
  { name: "Production", level: 0.92 },
  { name: "Live Performance", level: 0.88 },
  { name: "Mixing / Mastering", level: 0.78 },
  { name: "Sound Design", level: 0.72 },
  { name: "DJing", level: 0.85 }
];

// Stats data (bullet 4)
const STATS = [
  { label: "Years active", value: 10, suffix: "+" },
  { label: "Releases", value: 50, suffix: "+" },
  { label: "Shows", value: 200, suffix: "+" },
  { label: "Clients", value: 25, suffix: "+" }
];

// Testimonials data
const TESTIMONIALS = [
  {
    name: "Lena Morales",
    role: "Promoter — Sunset Sessions",
    text: "Jose's sets bring an energy that's rare — dancers never leave the floor. Professional, reliable, and endlessly creative."
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

function About() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <main className="about">
                <section className="about__hero">
                    <img
                        src={JThirteen}
                        alt="Jose Flores portrait"
                        className="about__portrait"
                        loading="lazy"
                    />
                    <div className="about__intro">
                        <h1 className="about__title">Jose Flores — Producer &amp; Live Performer</h1>
                        <p className="about__lead">
                            I craft immersive soundscapes and raw live energy for stage and studio. Shows, collabs, and commissions available.
                        </p>
                        <div className="about__ctas">
                            {/* <a className="btn btn--primary" href="/resume.pdf" download>Download Resume</a> */}
                            <a className="btn" href="/contact">Contact</a>
                        </div>
                    </div>
                </section>

                {/* Stats row with subtle count-up */}
                <section className="about__stats" aria-labelledby="stats-title">
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
                </section>

                {/* Timeline / milestones */}
                <section className="about__timeline" aria-labelledby="timeline-title">
                    <h2 id="timeline-title" className="timeline__title">Timeline</h2>
                    <ol className="timeline__list">
                        {TIMELINE.map((t, i) => (
                            <li key={i} className="timeline__item">
                                <span className="timeline__marker" aria-hidden="true" />
                                <div className="timeline__content">
                                    <time className="timeline__date">{t.year}</time>
                                    <h3 className="timeline__event">{t.title}</h3>
                                    <p className="timeline__text">{t.text}</p>
                                </div>
                            </li>
                        ))}
                    </ol>
                </section>

                {/* Skills / badges */}
                <section className="about__skills" aria-labelledby="skills-title">
                 <h2 id="skills-title" className="skills__title">Skills</h2>
                 <div className="skills__grid">
                   {SKILLS.map((s) => (
                     <div className="skill" key={s.name}>
                       <div className="skill__head">
                         <span className="skill__label">{s.name}</span>
                         <span className="skill__percent">{Math.round(s.level * 100)}%</span>
                       </div>
                       <div
                         className="skill__bar"
                         role="progressbar"
                         aria-valuemin="0"
                         aria-valuemax="100"
                         aria-valuenow={Math.round(s.level * 100)}
                       >
                         <div className="skill__fill" style={{ width: `${s.level * 100}%` }} />
                       </div>
                     </div>
                   ))}
                 </div>
               </section>

               {/* Testimonials */}
               <section className="about__testimonials" aria-labelledby="testimonials-title">
                 <h2 id="testimonials-title" className="testimonials__title">What people say</h2>
                 <div className="testimonials__grid">
                   {TESTIMONIALS.map((t, i) => (
                     <blockquote key={i} className="testimonial">
                       <p className="testimonial__text">“{t.text}”</p>
                       <footer className="testimonial__cite">
                         <span className="testimonial__name">{t.name}</span>
                         <span className="testimonial__role">{t.role}</span>
                       </footer>
                     </blockquote>
                   ))}
                 </div>
               </section>

                {/** Profile Section */}
                <section className="profile">
                    <div className="profile__set">
                        <div className="profile__grid">
                            <img
                                src={JThirteen}
                                alt="Jose Flores Spotlight"
                                loading="lazy"
                                aria-hidden="true"
                                className="profile__grid--image1"
                            />
                            <img src={JSixteen} alt="" className="profile__grid--image2"/>
                            <div className="profile__description">
                                <h1 className="profile__description--title">Jose Flores</h1>
                                <p className="profile__description--text">Bartender by day and DJ by night, you’ll find me spinning beats at some of the best bars and venues across San Diego, CA. Join me on a sonic journey through underground rhythms and timeless house classics.</p>

                                <p className="profile__description--text">My YouTube channel is your destination for electrifying Latin house mixes paired with captivating visuals, creating an immersive vibe you can feel.</p>

                                <p className="profile__description--text">From iconic tracks of the past to the freshest sounds of today, we’re curating the ultimate internet radio show experience.</p>

                                <p className="profile__description--text">🔥 Subscribe now and dive into the groove with Diagnostic & Friends — where the music does not stop.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <ScrollToTop className="hero__scroll" />
        </>
    );
}

export default About;