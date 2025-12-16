import { useEffect, useRef, useState } from "react";
import "./Video.css";
import CUDiag from "../../assets/CUDiag.jpg";
import DiagBlur from "../../assets/DiagBlur.jpg";
import JOne from "../../assets/jOne.jpeg";
import JThree from "../../assets/jThree.jpg";
// Using embed iframe for YouTube content instead of vidstack player
// import { Thumbnail } from "@vidstack/react";
// import { Time, type TimeProps } from "@vidstack/react";
// import { Title, type TitleProps } from "@vidstack/react";
import ScrollToTop from "react-scroll-to-top";
import FeaturedMix from '../../components/FeaturedMix/FeaturedMix';

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
                <div className="video__hero" style={{ backgroundImage: `url(${JThree})` }}>
                    <div className="video__hero-overlay" />
                    <div className={`video__hero-content ${mounted ? 'is-mounted' : ''}`}>
                        <h2 className="video__hero-title">Live Performance</h2>
                        <p className="video__hero-sub">Diagnostic--Club Set</p>
                        <p className="video__hero-sub">Recorded Live in San Diego</p>
                        <p className="video__hero-desc">A blend of house, groove, and late-night energy</p>
                        <div className="video__hero-ctas">
                            <button className="watch-button" onClick={handleWatch} aria-label="Watch Diagnostic">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <path d="M5 3v18l15-9L5 3z" fill="currentColor" />
                            </svg>
                            <span>Watch Now</span>
                            </button>
                            <a className="stream-button" href="/LinkTree" aria-label="Stream Diagnostic on streaming platforms">Stream</a>
                        </div>
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
                    <FeaturedMix poster={CUDiag} embedUrl="https://www.youtube.com/embed/SK6WN-y5P-0" title="Diagnostic - YouTube" start={537} shouldPlay={played} />
                </div>
                </div>

                <div className="video__meta">
                    <h2 className="video__meta-title">Diagnostic</h2>
                    <p className="video__meta-desc">Venue: Aero Club, San Diego</p>
                    <p className="video__meta-desc">Genre: House / Minimal / Groove</p>
                    <p className="video__meta-desc">Runtime: 30:26 min</p>
                </div>

                <ScrollToTop className="hero__scroll"/>
            </div>
        );
    };

export default Plans;