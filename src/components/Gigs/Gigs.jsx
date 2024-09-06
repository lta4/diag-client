import React from "react";
import "./Gigs.css"

const Gigs = () => {
    return (
        <div className="gigs" id="gig">
            <div className="fushion-container" id="shows">
                <div className="fushion-title">
                    <h3 className="fushion-gig">
                        Gig Dates
                    </h3>
                </div>
                <div className="show-container">
                    <div className="show-events">
                        <div className="g-event">
                            <div className="g-details">
                                <div className="g-date">Fri Aug 23</div>
                                <div className="g-venue">Music Box</div>
                                <div className="g-location">San Diego, CA</div>
                                <div className="g-button-container">
                                <a className="g-button" href="">RSVP</a>
                            </div>
                        </div>
                    </div>
                        <div className="g-event">
                            <div className="g-details">
                                <div className="g-date">Sun Oct 1</div>
                                <div className="g-venue">Radys Stadium</div>
                                <div className="g-location">San Diego, CA</div>
                                <div className="g-button-container">
                                <a className="g-button" href="">RSVP</a>
                            </div>
                        </div>
                    </div>
                        <div className="g-event">
                            <div className="g-details">
                                <div className="g-date">Mon Dec 4</div>
                                <div className="g-venue">Sycamore Den</div>
                                <div className="g-location">San Diego, CA</div>
                                <div className="g-button-container">
                                <a className="g-button" href="">RSVP</a>
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