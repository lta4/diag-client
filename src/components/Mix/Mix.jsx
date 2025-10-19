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
                <div className="songs__list">
                    <div className="songs__list--section">
                        <iframe width="560" height="315"
                        className="songs__list--name" 
                        src="https://www.youtube.com/embed/t4neSm8RiME?si=-wLwyG8Wzfw71I_F" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
                        </iframe>
                    </div>
                    <div className="songs__list--section">
                        <iframe width="560" height="315"
                        className="songs__list--name" 
                        src="https://www.youtube.com/embed/3tLRhUGOqM4?si=d9mXK__A1d68uKyy" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
                        </iframe>
                    </div>
                    <div className="songs__list--section">
                        <iframe width="560" height="315"
                        className="songs__list--name" 
                        src="https://www.youtube.com/embed/AYnJ1ur4Sd8?si=Papf1DTncuUMsKqu" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
                        </iframe>
                    </div>
                    <div className="songs__list--section">
                        {/* <a href="" className="songs__list--name"> */}
                        <iframe width="560" height="315"
                        className="songs__list--name" 
                        src="https://www.youtube.com/embed/0t_ZjqrGkVw?si=ir46CtaJp-umZsFw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
                        </iframe>
                    </div>
                    {/* <div className="songs__list--name">
                        <a href="">
                            sullivan king
                        </a>
                    </div> */}
                    {/* <div className="songs__list--name">
                        <a href="">
                            kaskade
                        </a>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default Mix;