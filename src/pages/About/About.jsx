import { useEffect } from "react";
import "./About.css";
import JThirteen from "../../assets/jThirteen.jpg";
import JSixteen from "../../assets/jSixteen.jpg";
import ScrollToTop from "react-scroll-to-top";

function About() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <section className="profile">
                <div className="profile__set">
                    <div className="profile__grid">
                        <img src={JThirteen} alt="" className="profile__main-image" />
                        <img src={JSixteen} alt="" className="profile__secondary-image"/>
                        <div className="profile__description">
                            <h1 className="profile__description--title">Jose Flores</h1>
                            <p className="profile__description--text">Bartender by day and DJ by night, you’ll find me spinning beats at some of the best bars and venues across San Diego, CA. Join me on a sonic journey through underground rhythms and timeless house classics.</p>

                            <p className="profile__description--text">My YouTube channel is your destination for electrifying Latin house mixes paired with captivating visuals, creating an immersive vibe you can feel.</p>

                            <p className="profile__description--text">From iconic tracks of the past to the freshest sounds of today, we’re curating the ultimate internet radio show experience.</p>

                            <p className="profile__description--text">🔥 Subscribe now and dive into the groove with Diagnostic & Friends — where the music never stops.</p>
                        </div>
                    </div>
                </div>
            </section>
            <ScrollToTop className="hero__scroll"/>
        </>
    );
};
export default About;