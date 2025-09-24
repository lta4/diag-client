import React from "react";
import "./Gigs.css"
// import Show from "../../components/Show/Show";
import Widget from "../../components/Widget/Widget";

const Gigs = () => {
    return (
        <div className="gigs" id="">
            <div className="gigs__container">
                <div className="gigs__title">
                    <h3 className="gigs__title--fushion">
                        Gig Dates
                    </h3>
                </div>
                <div className="gigs__event">
                    <div className="gigs__list">
                        <div className="gigs__list--details">
                            <div className="gigs__list--date">Fri Aug 23</div>
                            <div className="gigs__list--venue">Music Box</div>
                            <div className="gigs__list--location">San Diego, CA</div>
                            <div className="gigs__button">
                                <a href="" className="gigs__button--detail">RSVP</a>
                            </div>
                        </div>
                    <div className="gigs__list">
                        <div className="gigs__list--details">
                            <div className="gigs__list--date">Sun Oct 1</div>
                            <div className="gigs__list--venue">Radys Stadium</div>
                            <div className="gigs__list--location">San Diego, CA</div>
                            <div className="gigs__button">
                                <a href="" className="gigs__button--detail">RSVP</a>
                            </div>
                        </div>
                    </div>
                    <div className="gigs__list">
                        <div className="gigs__list--details">
                            <div className="gigs__list--date">Mon Dec 4</div>
                            <div className="gigs__list--venue">Sycamore Den</div>
                            <div className="gigs__list--location">San Diego, CA</div>
                            <div className="gigs__button">
                                <a href="" className="gigs__button--detail">RSVP</a>
                            </div>
                        </div>
                    </div>
                    <div>
                        {/* <Show /> */}
                        <Widget />
                    </div>
                </div>
            </div>
            <div>
                {/* <Show /> */}
            </div>
        </div>
    </div>
    );
};

export default Gigs;