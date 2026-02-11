import { useEffect } from "react";
import "./About.css";
import JThirteen from "../../assets/jThirteen.jpg";
import JSixteen from "../../assets/jSixteen.jpg";
import ScrollToTop from "react-scroll-to-top";

function About() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const TIMELINE = [
        { year: '2025', title: 'New Album Release', text: 'Released the latest studio album — a blend of live and electronic textures.' },
        { year: '2023', title: 'Regional Tour', text: 'Played 30+ shows across the west coast, focusing on immersive live sets.' },
        { year: '2021', title: 'Debut EP', text: 'Self-released a debut EP that landed on several indie playlists.' },
        { year: '2019', title: 'Residency', text: 'Started a monthly residency showcasing new talent and collaborative sets.' }
    ];

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
            <ScrollToTop className="hero__scroll"/>
        </>
    );
};
export default About;