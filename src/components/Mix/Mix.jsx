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
                    {/* <div className="songs__list--section">
                        <iframe 
                        title="Diagnostic & Friends 002 - Youtube"
                        width="560" height="315"
                        className="songs__list--name" 
                        src="https://www.youtube.com/embed/t4neSm8RiME?si=-wLwyG8Wzfw71I_F" frameBorder="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen>
                        </iframe>
                    </div> */}
                    {/* <div className="songs__list--section">
                        <iframe
                        title="Diagnostic & Friends 003 - Youtube" 
                        width="560" height="315"
                        className="songs__list--name" 
                        src="https://www.youtube.com/embed/3tLRhUGOqM4?si=d9mXK__A1d68uKyy" frameBorder="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen>
                        </iframe>
                    </div> */}
                    {/* <div className="songs__list--section">
                        <iframe
                        title="Diagnostic & Friends 004 - Youtube"
                        width="560" height="315"
                        className="songs__list--name" 
                        src="https://www.youtube.com/embed/AYnJ1ur4Sd8?si=Papf1DTncuUMsKqu" frameBorder="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen>
                        </iframe>
                    </div> */}
                    <div className="songs__list--section">
                        <div className="embed">
                            <iframe
                                title="Diagnostic @ Parc & Rec - Youtube"
                                className="songs__list--name"
                                src="https://www.youtube.com/embed/0t_ZjqrGkVw?si=ir46CtaJp-umZsFw"
                                frameBorder="1"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen>
                            </iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Mix;