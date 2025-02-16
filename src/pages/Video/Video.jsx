import React from "react";
import "./Video.css";
import "@vidstack/react/player/styles/default/theme.css";
import "@vidstack/react/player/styles/default/layouts/video.css";
import { MediaPlayer, MediaProvider } from "@vidstack/react";
import { defaultLayoutIcons, DefaultVideoLayout } from
"@vidstack/react/player/layouts/default";
import { Poster, type PosterProps } from "@vidstack/react";

const Plans = () => {
    return (
        <>
            <div>
                Video
                <MediaPlayer title="Sprite Fight" src="https://files.vidstack.io/sprite-fight/720p.mp4">
                    <MediaProvider />
                    <DefaultVideoLayout thumbnails="https://files.vidstack.io/sprite-fight/thumbnails.vtt" icons={defaultLayoutIcons} 
                    />
                    <Poster src="..." alt="..." />
                </MediaPlayer>
            </div>
        </>
    );
};

export default Plans