import React, { useEffect } from "react";
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
                        <p className="profile__description--text">
                        Welcome to Diagnostic & Friends, your gateway to the world of house music! Join us on a sonic journey through the realms of underground beats and timeless classics. Our YouTube channel is your destination for electrifying house music mixes accompanied by captivating visuals. Explore the sounds of the past and the cutting-edge tunes of today as we curate the ultimate internet radio show experience. Subscribe now and dive into the groove.
                        </p>
                    </div>
                </div>
            </section>
            <ScrollToTop />
        </>
    );
};
export default About;