import { useEffect } from "react";
import "./About.css";
import JThirteen from "../../assets/jThirteen.jpg";
import ScrollToTop from "react-scroll-to-top";

function About() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <section className="profile">
                <div className="profile__set">
                    <div className="profile__container">
                    <img src={JThirteen} alt="" className="profile__container--image" />
                    </div>
                    <div className="profile__description">
                    <h1 className="profile__description--title">Jose Flores</h1>
                        {/* <p className="profile__description--text">
                        My name is Jose Flores and welcome to Diagnostic & Friends, your gateway to the world of house music. Join us on a sonic journey through the realms of underground beats and timeless classics. My YouTube channel is your destination for electrifying latin house mixes accompanied by captivating visuals. Explore the sounds of the past and the cutting-edge tunes of today as we curate the ultimate internet radio show experience. Subscribe now and dive into the groove.
                        </p> */}
                        <p className="profile__description--text">Bartender by day and DJ by night, you’ll find me spinning beats at some of the best bars and venues across San Diego, CA. Join me on a sonic journey through underground rhythms and timeless house classics.</p>
                        <br />
                        <p className="profile__description--text">My YouTube channel is your destination for electrifying Latin house mixes paired with captivating visuals, creating an immersive vibe you can feel.</p>
                        <br />
                        <p className="profile__description--text">From iconic tracks of the past to the freshest sounds of today, we’re curating the ultimate internet radio show experience.</p>
                        <br />
                        <p className="profile__description--text">🔥 Subscribe now and dive into the groove with Diagnostic & Friends — where the music never stops.</p>
                    </div>
                </div>
            </section>
            <ScrollToTop className="hero__scroll"/>
        </>
    );
};
export default About;