import React from "react";
import "./About.css";

const About = () => {
    return (
        <>
            <div>
                <h1 className="about-title" id="a">About</h1>
            </div>
            <div className="profile-title" id="b">
                <h1>About</h1>
            </div>
            <section className="profile">
                <div className="profile__set">
                    <div className="profile__set--image">
                    <img src="https://res.cloudinary.com/dfltkqotn/image/upload/v1636925630/Profile-Image.jpg" alt="profile of one's self" height="350px" />
                    <div className="profile__set--description">
                        <h2>I'm Jose Flores</h2>
                        <p>I'm a DJ residing in San Diego, CA.
                        I have a serious passion for creating amazing styles and intuitive musical experiences.</p>
                        <p>Let's create something special!</p>
                    </div>
                    </div>
                </div>
                <div className="profile__set">
                    <div className="profile__set__description">
                    <h1>Hello column 2</h1>
                        <h2>I am the h2</h2>
                        <p>Did you know I am using git hub lens</p>
                        <div class="profile__set__slide">
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