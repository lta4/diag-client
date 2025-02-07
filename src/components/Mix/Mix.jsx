import React from "react";
import "./Mix.css";

const Mix = () => {
    return (
        <div className="mix">
            <div className="mix__container">
                <div className="mix__title">
                    <h3 className="mix__title--fushion">
                        Mixes
                    </h3>
                </div>
            </div>
            <div className="songs">
                <div className="songs__event">
                    <div className="songs__list">
                        <div className="songs__list--name">
                            <a href="">
                                bad omens
                            </a>
                        </div>
                        <div className="songs__list--name">
                            <a href="">
                                of mice and men
                            </a>
                        </div>
                        <div className="songs__list--name">
                            <a href="">
                                evermore
                            </a>
                        </div>
                        <div className="songs__list--name">
                            <a href="">
                                sullivan king
                            </a>
                        </div>
                        <div className="songs__list--name">
                            <a href="">
                                kaskade
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Mix;