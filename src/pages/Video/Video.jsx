import { useEffect } from "react";
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
import ScrollUp from "react-scroll-to-top";

function Plans() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
            <div className="video">
                <div className="video__title">
                    Video
                </div>
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
                <MediaPlayer playsInline title="Diagnostic" src="https://music.youtube.com/watch?v=wSxtLTEFV7w&si=oevK8_hPBlaJ1Tgz" className="video__container--media">
                    <MediaProvider />
                            <Poster 
                                className=""
                                src="https://music.youtube.com/watch?v=wSxtLTEFV7w&si=oevK8_hPBlaJ1Tgz/poster.webp" 
                                alt="..." />
                            <DefaultVideoLayout 
                                thumbnails="https://music.youtube.com/watch?v=wSxtLTEFV7w&si=oevK8_hPBlaJ1Tgz.thumnbnails.vtt"
                                icons= {defaultLayoutIcons}
                            />
                </MediaPlayer>
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
                <ScrollUp />
            </div>
        );
    };

export default Plans;