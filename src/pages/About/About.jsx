import React from "react";
import "./About.css";
import JTwo from "../../assets/jTwo.jpg"
import JSix from "../../assets/jSix.jpeg";
import JEleven from "../../assets/jEleven.jpeg";
import ScrollToTop from "react-scroll-to-top";

const About = () => {
    return (
        <>
            <section className="profile">
                <div className="profile__set">
                    <div className="profile__container">
                    <img src={JEleven} alt="" className="profile__container--image" />
                    <div className="profile__container--text">
                        Diagnostic
                    </div>
                    {/* <div className="profile__set--description">
                        <h2>Jose Flores</h2>
                        <p>I'm a DJ residing in San Diego, CA.
                        I have a serious passion for creating amazing styles and intuitive musical experiences.</p>
                        <p>Let's create something special!</p>
                    </div> */}
                    </div>
                </div>
                <div className="profile__set">
                    <div className="profile__set--description">
                    <h1 className="profile__set--title">Jose Flores</h1>
                        <p>
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