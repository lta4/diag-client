import React, { useEffect, useRef } from "react";
import "./HeroVideo.css";

/**
 * Props:
 * - src: string (required) - video file path / import
 * - poster: string (optional) - poster image path
 * - loopEnd: number (optional) - seconds to loop to (default 4)
 */
export default function HeroVideo({ src, poster, loopEnd = 4 }) {
    const ref = useRef(null);

    useEffect(() => {
        const v = ref.current;
        if (!v) return;

        // Ensure muted autoplay works across browsers
        v.muted = true;
        v.plasInLine = true;
        const tryPlay = () => {
            const p = v.play();
            if (p && typeof p.then === "function") p.catch(() => {});
        };
        tryPlay();

        const onTime = () => {
            if (v.currentTime >= loopEnd) {
                v.currentTime = 0;
                // small play guard
                tryPlay();
            }
        };

        v.addEventListener("timeupdate", onTime);
        return () => v.removeEventListener("timeupdate", onTime);
    }, [loopEnd]);

    return (
        <div className="heroVideo__wrap" aria-hidden="true">
            <video
                ref={ref}
                className="heroVideo"
                src={src}
                poster={poster}
                muted
                autoPlay
                playsInline
                preload="metadata"
                // no native loop; script handles short-segment loop
            />
        </div>
    );
}