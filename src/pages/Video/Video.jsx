import React from "react";
import "./Video.css";
import "@vidstack/react/player/styles/default/theme.css";
import "@vidstack/react/player/styles/default/layouts/video.css";
import { MediaPlayer, MediaProvider } from "@vidstack/react";
import { defaultLayoutIcons, DefaultVideoLayout } from
"@vidstack/react/player/layouts/default";
import { Poster } from "@vidstack/react";
// import { Thumbnail } from "@vidstack/react";
// import { Time, type TimeProps } from "@vidstack/react";
// import { Title, type TitleProps } from "@vidstack/react";
import ScrollToTop from "react-scroll-to-top";

const Plans = () => {

    return (
        <>
            <div>
                <MediaPlayer playsInLine title="Sprite Fight" src="https://files.vidstack.io/sprite-fight/720p.mp4">
                    <MediaProvider />
                        <Poster 
                            className="vds-poster"
                            src="https://files.vidstack.io/sprite-fight/poster.webp" 
                            alt="Girl walks into campfire with gnomes surrounding her friend ready for their next meal!" />
                        <DefaultVideoLayout thumbnails="https://files.vidstack.io/sprite-fight/thumbnails.vtt" icons={defaultLayoutIcons} 
                        />
                </MediaPlayer>
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
            </div>
            <ScrollToTop />
        </>
    );
};

export default Plans