import React from "react";
import "./Gig.css"
import jOneInk from "../../assets/jOneInk.jpg";
import Show from "../../components/Show/Show";
import Newsletter from "../../components/Newsletter/Newsletter";

const Gig = () => {
    return (
        <>
            <main className="gig">
                <section className="gig__hero">
                    <div className="gig__intro">
                        <h1 className="gig__title">Gig</h1>
                        <p>I am Gig</p>
                    </div>
                </section>
                <section className="gig__show">
                    <div className="gig__show--container">
                        <Show />
                    </div>
                </section>
                <section>
                    <div className="gig__wall">
                        <img src={jOneInk}
                            alt="J One Ink"
                            className="gig__wall--image"
                        />
                    </div>
                </section>
                <section>
                    <div>
                        <Newsletter />
                    </div>
                </section>
            </main>
        </>
    );
};  

export default Gig;