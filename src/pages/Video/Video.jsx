import { useEffect } from "react";
import "./Video.css";
import CUDiag from "../../assets/CUDiag.jpg";
// Using embed iframe for YouTube content instead of vidstack player
// import { Thumbnail } from "@vidstack/react";
// import { Time, type TimeProps } from "@vidstack/react";
// import { Title, type TitleProps } from "@vidstack/react";
import ScrollToTop from "react-scroll-to-top";

function Plans() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
            <div className="video">
                {/* <div className="video__title">
                    Diagnostic
                </div> */}
                {/* <img src={CUDiag} alt="CUDiag" /> */}
                <div className="video__container">
                {/* <MediaPlayer playsInline title="Sprite Fight" src="https://files.vidstack.io/sprite-fight/720p.mp4">
                    <MediaProvider />
                        <Poster 
                            className="vds-poster"
                            src="https://files.vidstack.io/sprite-fight/poster.webp" 
                            alt="Girl walks into campfire with gnomes surrounding her friend ready for their next meal!" />
                        <DefaultVideoLayout thumbnails="https://files.vidstack.io/sprite-fight/thumbnails.vtt" icons={defaultLayoutIcons} 
                        />
                </MediaPlayer> */}
                {/* <img src={CUDiag} alt="CUDiag" /> */}
                <div className="video__container--media">
                    <iframe
                        title="Diagnostic - YouTube"
                        className="video__iframe"
                        src="https://www.youtube.com/embed/wSxtLTEFV7w?rel=0&modestbranding=1"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                    />
                </div>
                </div>
                {/* <Thumbnail.Root
                    src="https://files.vidstack.io/sprite-fight/thumbnails.vtt"
                    time={10}
                    className="vds-thumbnail"
                >
                    <Thumbnail.Img />
                </Thumbnail.Root> */}
                {/* <Title /> */}
                {/* <div className="vds-time-group">
                    <Time type="current" className="vds-time" />
                        <div className="vds-time-divider"></div>
                    <Time type="current" className="vds-time"/>
                </div> */}
                <ScrollToTop className="hero__scroll"/>
            </div>
        );
    };

export default Plans;