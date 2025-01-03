import React from "react";
import "./About.css";
import JTwo from "../../assets/jTwo.jpg"
import JSix from "../../assets/jSix.jpeg";

const About = () => {
    return (
        <>
            <div className="jTwo_container">
                <img src={JTwo} alt="" className="jTwo-image"/>
            </div>
            <div className="hr__bar">
                <hr />
            <section className="about">
                <div className="about__title">
                    <h1>About</h1>
                </div>
            </section>
            <hr />
            </div>
            <section className="profile">
                <div className="profile__set">
                    <div className="profile__set--image">
                    <img src={JSix} alt="" className="jTwo-image" />
                    <div className="profile__set--description">
                        <h2>Jose Flores</h2>
                        <p>I'm a DJ residing in San Diego, CA.
                        I have a serious passion for creating amazing styles and intuitive musical experiences.</p>
                        <p>Let's create something special!</p>
                    </div>
                    </div>
                </div>
                <div className="profile__set">
                    <div className="profile__set--description">
                    <h1>Hello column 2</h1>
                        <h2>I am the h2</h2>
                        <p>Did you know I am using git hub lens</p>
                        <div class="profile__set--slide">
                        <img id="slide" src="http://lorempixel.com/output/cats-q-c-100-100-4.jpg" />
                        </div>
                        <span>70</span>
                    </div>
                </div>
            </section>
        </>
    );
};
export default About;