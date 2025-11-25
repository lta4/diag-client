import { useEffect, useRef, useState } from "react";
import "./Video.css";
import CUDiag from "../../assets/CUDiag.jpg";
import DiagBlur from "../../assets/DiagBlur.jpg";
// Using embed iframe for YouTube content instead of vidstack player
// import { Thumbnail } from "@vidstack/react";
// import { Time, type TimeProps } from "@vidstack/react";
// import { Title, type TitleProps } from "@vidstack/react";
import ScrollToTop from "react-scroll-to-top";

function Plans() {

    const videoRef = useRef(null);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [played, setPlayed] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (!prefersReduced) setMounted(true);
        else setMounted(false);
    }, []);

    const handleWatch = () => {
        setPlayed(true);
        if (videoRef.current) {
            videoRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    };

    return (
            <div className="video">
                <div className="video__hero" style={{ backgroundImage: `url(${DiagBlur})` }}>
                    <div className="video__hero-overlay" />
                    <div className={`video__hero-content ${mounted ? 'is-mounted' : ''}`}>
                        <h1 className="video__hero-title">Diagnostic</h1>
                        <p className="video__hero-sub">A short film about the small, strange things that make up a life.</p>
                        <p className="video__hero-desc">Featuring a single performance captured in one take — cinematic, intimate, and raw. Tap below to jump straight to the video.</p>
                        <button className="watch-button" onClick={handleWatch} aria-label="Watch Diagnostic">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <path d="M5 3v18l15-9L5 3z" fill="currentColor" />
                            </svg>
                            <span>Watch Now</span>
                        </button>
                    </div>
                </div>

                <div className="video__container" ref={videoRef} id="featured-video">
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
                    {!played ? (
                        <div className={`video__poster ${mounted ? 'is-mounted' : ''}`} role="button" tabIndex={0} onClick={handleWatch} onKeyDown={(e) => { if (e.key === 'Enter') handleWatch(); }} aria-label="Play video">
                            <img src={CUDiag} alt="Diagnostic poster" />
                            <div className="video__poster-play">
                                <svg width="42" height="42" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path d="M5 3v18l15-9L5 3z" fill="currentColor" />
                                </svg>
                            </div>
                        </div>
                    ) : (
                        <iframe
                            title="Diagnostic - YouTube"
                            className="video__iframe"
                            src="https://www.youtube.com/embed/SK6WN-y5P-0?si=noteC9NPfmZs754J&amp;start=537&autoplay=1"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                        />
                    )}
                </div>
                </div>

                <div className="video__meta">
                    <h2 className="video__meta-title">Diagnostic</h2>
                    <p className="video__meta-desc">A short film — start at 8:57 for the featured scene. Full runtime available on the embedded player.</p>
                </div>

                <ScrollToTop className="hero__scroll"/>
            </div>
        );
    };

export default Plans;