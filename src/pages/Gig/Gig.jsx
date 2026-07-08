import React from "react";
import "./Gig.css"
import BGbackground from "../../assets/BGbackground.png";
import HeroVideo from "../../components/HeroVideo/HeroVideo";
import videoLoop from "../../assets/DiagB1.MP4"; // add your file
// import videoPoster from "../../assets/gig-poster.jpg" // optional poster
import Show from "../../components/Show/Show";
import Newsletter from "../../components/Newsletter/Newsletter";

const Gig = () => {
    return (
        <>
            <main className="gig">
                <div 
                    className="gig__bg" aria-hidden="true" style={{ backgroundImage: `url(${BGbackground})` }} 
                />
                {/* <section className="gig__hero">
                    <div className="gig__intro">
                        <h1 className="gig__title">Upcoming Events</h1>
                    </div>
                </section> */}
                <header className="gig__hero">
                    <HeroVideo src={videoLoop} loopEnd={4} />
                    <div className="gig__hero-overlay">
                        <h1 className="gig__title">Shows</h1>
                        <h2>From underground clubs to curated events, Diagnostic delivers immersive electronic experiences built around sound, atmosphere, and connection.</h2>
                        {/* optional CTA */}
                    </div>
                </header>
                <section className="gig__show">
                    <div className="gig__show--container">
                        <Show />
                    </div>
                </section>
                {/* <section>
                    <div className="gig__wall">
                        <img src={jOneInk}
                            alt="J One Ink"
                            className="gig__wall--image"
                        />
                    </div>
                </section> */}
                <section className="gig__news">
                    <div className="gig__news--container">
                        <Newsletter />
                    </div>
                </section>
            </main>
        </>
    );
};  

export default Gig;