import React from "react";
import "./Gigs.css"

const Gigs = () => {
    return (
        <div className="gigs" id="gig">
            <div className="left-g">
                <p>left ggg</p>
            </div>
            <div className="right-g">
                <p>right ggg</p>
            </div>
            <div className="fushion-container" id="shows">
                <div className="fushion-title">
                    <div className="bit-container">
                        <div className="bit-navbar-container">
                            <div className="bit-events-lists">
                                <div className="bit-events-container">
                                    <div className="bit-upcoming-events">
                                        <div className="bit-event">
                                            <a className="bit-details">
                                                <div>
                                                    <span className="bit-date"></span>
                                                </div>
                                                <div className="bit-titleWrapper">
                                                    <div className="bit-venue"></div>
                                                </div>
                                                <div className="bit-location"></div>
                                            </a>
                                            <div className="bit-details bit-event-buttons">
                                                <div></div>
                                                <div></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gigs;