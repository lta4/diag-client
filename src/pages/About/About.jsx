import React from "react";
import "./About.css";
import JTwo from "../../assets/jTwo.jpg"
import JSix from "../../assets/jSix.jpeg";
import ScrollToTop from "react-scroll-to-top";

const About = () => {
    return (
        <>
            <div className="jTwo__container">
                <img src={JTwo} alt="" className="jTwo__container--image"/>
            </div>
            <div className="hr__bar">
                <hr />
            <section className="hr__bar--about">
                <div className="hr__bar--title">
                    <h1>About</h1>
                </div>
            </section>
            <hr />
            </div>
            <section className="profile">
                <div className="profile__set">
                    <div className="profile__set--image">
                    <img src={JSix} alt="" className="JSix__container" />
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
                    <h1>Jose Flores</h1>
                        <p>Lorem ipsum odor amet, consectetuer adipiscing elit. Erat velit odio facilisi ut posuere nullam bibendum urna. Scelerisque class montes condimentum dolor elementum natoque cras. Vel vestibulum quisque consectetur odio fringilla taciti tempus orci elementum. Ullamcorper amet tempor donec ornare taciti adipiscing curae. Magna molestie velit arcu pharetra velit ullamcorper dignissim. Nascetur per leo malesuada felis tempus class curae. Tempus diam at habitant ac habitant quisque sit.</p>
                        <p>Felis vivamus aenean bibendum volutpat urna tincidunt dolor per. Maximus est tristique hendrerit, ut leo pharetra. Finibus viverra posuere et tortor lacinia ornare. Nec nisi ultricies cursus ante faucibus. Mauris aenean ipsum convallis elit sociosqu sagittis vivamus. Ornare eget quis primis id mauris hac urna bibendum. Odio nisl ut justo hendrerit hendrerit vestibulum. Leo est ipsum varius lacinia tempor. Sit tellus lorem suspendisse; molestie consectetur lacus enim.</p>
                        <div class="profile__set--slide">
                        <img id="slide" src="http://lorempixel.com/output/cats-q-c-100-100-4.jpg" />
                        </div>
                        <span>70</span>
                    </div>
                </div>
            </section>
            <ScrollToTop />
        </>
    );
};
export default About;