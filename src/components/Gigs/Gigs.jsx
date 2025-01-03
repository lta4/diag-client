import React from "react";
import "./Gigs.css"

const Gigs = () => {
    return (
        <div className="gigs" id="shows">
            <div className="gigs__container">
                <div className="gigs__title">
                    <h3 className="gigs__title--fushion">
                        Gig Dates
                    </h3>
                </div>
                <div className="shows">
                    <div className="shows__event">
                        <div className="shows__list">
                            <div className="shows__list--details">
                                <div className="shows__list--date">Fri Aug 23</div>
                                <div className="shows__list--venue">Music Box</div>
                                <div className="shows__list--location">San Diego, CA</div>
                                {/* <div className="shows__button">
                                    <a className="shows__button--detail" href="">RSVP</a>
                                </div> */}
                            </div>
                        </div>
                        <div className="shows__list">
                            <div className="shows__list--details">
                                <div className="shows__list--date">Sun Oct 1</div>
                                <div className="shows__list--venue">Radys Stadium</div>
                                <div className="shows__list--location">San Diego, CA</div>
                                {/* <div className="shows__button">
                                    <a className="shows__button--detail" href="">RSVP</a>
                                </div> */}
                            </div>
                        </div>
                        <div className="shows__list">
                            <div className="shows__list--details">
                                <div className="shows__list--date">Mon Dec 4</div>
                                <div className="shows__list--venue">Sycamore Den</div>
                                <div className="shows__list--location">San Diego, CA</div>
                                {/* <div className="shows__button">
                                    <a className="shows__button--detail" href="">RSVP</a>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gigs;