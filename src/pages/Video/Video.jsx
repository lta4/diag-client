import React, { useEffect, useRef, useState } from "react";
import "./Video.css";
import BG from "../../assets/BGbackgrond.png";
import JFour from "../../assets/jFour.jpg";
import JThree from "../../assets/jThree.jpg";
import ScrollToTop from "react-scroll-to-top";
import FeaturedMix from '../../components/FeaturedMix/FeaturedMix';
import StickyPlayer from "../../components/StickyPlayer/StickyPlayer";
import Poster from "../../assets/jFifteenInk.jpg"; // replace with your poster or remove if absent
import SampleVideo from "../../assets/NOCTURNA.mp3"; // replace with your video or remove if absent

function Plans() {

    const videoRef = useRef(null);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [played, setPlayed] = useState(false);
    const [mounted, setMounted] = useState(false);
    const [playingTitle, setPlayingTitle] = useState("Featured Video");
    // --- captions + chapters ---
    const CHAPTERS = [
      { label: "Intro / Build", time: 0 },
      { label: "Peak — Groove", time: 120 },
      { label: "Late Night Drop", time: 600 },
      { label: "Outro", time: 1800 }
    ];
    const [startTime, setStartTime] = useState(537);
    const [captionsOn, setCaptionsOn] = useState(false);

    const baseEmbed = "https://www.youtube.com/embed/SK6WN-y5P-0";
    const computedEmbed = `${baseEmbed}?start=${startTime || 0}&autoplay=${played ? 1 : 0}${captionsOn ? "&cc_load_policy=1" : ""}`;

    const jumpToChapter = (c) => {
      setStartTime(c.time);
      setPlayingTitle(`Featured — ${c.label}`);
      setPlayed(true);
      if (videoRef.current) videoRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
    };
    const toggleCaptions = () => setCaptionsOn((v) => !v);
    // --- end captions + chapters ---
    
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
            <div className="video" style={{ backgroundImage: `url(${BG})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
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
                <div className="video__phrase">
                    <h2 className="video__phrase-text">Featured Video</h2>
                </div>
                <div className="video__container" ref={videoRef} id="featured-video">
                <div className="video__container--media">
                    {/* computedEmbed applies start/autoplay/cc params */}
                    <FeaturedMix poster={JFour} embedUrl={computedEmbed} title="Diagnostic - YouTube" start={startTime} shouldPlay={played} />

                    <div className="video__controls-extra">
                      <button className={`video__btn ${captionsOn ? 'is-active' : ''}`} onClick={toggleCaptions} aria-pressed={captionsOn} aria-label="Toggle captions">
                        CC
                      </button>
                      <nav className="video__chapters" aria-label="Chapters">
                        {CHAPTERS.map((c, idx) => (
                          <button key={idx} className="video__chapter" onClick={() => jumpToChapter(c)}>
                            {c.label}
                          </button>
                        ))}
                      </nav>
                    </div>
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
                {/* Sticky mini-player: keeps playback available while scrolling */}
                <StickyPlayer
                    src={SampleVideo}         /* replace or pass audio URL */
                    poster={Poster}          /* optional thumbnail */
                    title={playingTitle}
                />
            </div>
        );
    };

export default Plans;