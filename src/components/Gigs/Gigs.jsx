import React from "react";
import "./Gigs.css"

const Gigs = () => {
    return (
        <div className="gigs" id="gig">
            {/* <div className="left-g">
                <p>left ggg</p>
            </div>
            <div className="right-g">
                <p>right ggg</p>
            </div> */}
            <div className="fushion-container" id="shows">
                <div className="fushion-title">
                    <h3 className="fushion-gig">
                        Gig Dates
                    </h3>
                        <div className="bit-container">
                            <div className="bit-navbar-container">
                            <div className="bit-event-lists">
                                <div className="bit-events-container">
                                    <div className="bit-upcoming-events">
                                        <div className="bit-event">
                                            <a className="bit-details">
                                                <div>
                                                    <span className="bit-date">Fri Aug 23</span>
                                                </div>
                                                <div className="bit-titleWrapper">
                                                    <div className="bit-venue">Music Box</div>
                                                    </div>
                                                <div className="bit-location">San Diego, CA</div>
                                            </a>
                                            <div className="bit-details bit-event-buttons">
                                                <div className="bit-rsvp-container">
                                                    <a className="bit-rsvp bit-button" href="">RSVP</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bit-event">
                                            <a className="bit-details">
                                                <div>
                                                    <span className="bit-date">Sun Oct 1</span>
                                                </div>
                                                <div className="bit-titleWrapper">
                                                    <div className="bit-venue">Radys Stadium</div>
                                                    </div>
                                                <div className="bit-location">San Diego, CA</div>
                                            </a>
                                            <div className="bit-details bit-event-buttons">
                                                <div className="bit-rsvp-container">
                                                    <a className="bit-rsvp bit-button" href="">RSVP</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bit-event">
                                            <a className="bit-details">
                                                <div>
                                                    <span className="bit-date">Mon Dec 4</span>
                                                </div>
                                                <div className="bit-titleWrapper">
                                                    <div className="bit-venue">Sycamore Den</div>
                                                    </div>
                                                <div className="bit-location">San Diego, CA</div>
                                            </a>
                                            <div className="bit-details bit-event-buttons">
                                                <div className="bit-rsvp-container">
                                                    <a className="bit-rsvp bit-button" href="">RSVP</a>
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
        </div>
    );
};

export default Gigs;