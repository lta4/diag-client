import { useEffect, useRef, useState } from "react";
import "./Video.css";
import CUDiag from "../../assets/CUDiag.jpg";
import DiagBlur from "../../assets/DiagBlur.jpg";
import JOne from "../../assets/jOne.jpeg";
import JTwo from "../../assets/jTwo.jpg";
import JFour from "../../assets/jFour.jpg";
import JFive from "../../assets/jFive.jpg";
import JEleven from "../../assets/jEleven.jpeg";
import JThree from "../../assets/jThree.jpg";
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
                <div className="video__container--media">
                    <FeaturedMix poster={JFour} embedUrl="https://www.youtube.com/embed/SK6WN-y5P-0" title="Diagnostic - YouTube" start={537} shouldPlay={played} />
                </div>
                </div>
                <div className="video__meta">
                    <h2 className="video__meta-title">Diagnostic</h2>
                    <p className="video__meta-desc">Venue: Aero Club, San Diego</p>
                    <p className="video__meta-desc">Genre: House / Minimal / Groove</p>
                    <p className="video__meta-desc">Runtime: 30:26 min</p>
                </div>
                <div className="video__meta">
                    <h1 className="video__meta-title">"A late-night set built for dark rooms and heavy movement."</h1>
                </div>

                <ScrollToTop className="hero__scroll"/>
            </div>
        );
    };

export default Plans;