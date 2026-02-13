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
import { FaTwitter, FaInstagram, FaYoutube, FaDownload, FaShareAlt, FaLink } from "react-icons/fa";

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

    // --- share / embed / download / social CTAs ---
    const [embedOpen, setEmbedOpen] = useState(false);
    const [shareCopied, setShareCopied] = useState(false);
    const [embedCopied, setEmbedCopied] = useState(false);

    const pageUrl = window.location.origin + "/Video#featured-video";
    const shareUrl = computedEmbed || pageUrl;

    const shareVideo = async () => {
      if (navigator.share) {
        try {
          await navigator.share({ title: "Diagnostic — Featured Video", text: "Watch this set", url: shareUrl });
          return;
        } catch (e) { /* user cancelled */ }
      }
      try {
        await navigator.clipboard.writeText(shareUrl);
        setShareCopied(true);
        setTimeout(() => setShareCopied(false), 1600);
      } catch (e) { /* ignore */ }
    };

    const embedCode = `<iframe src="${computedEmbed}" width="560" height="315" frameborder="0" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe>`;
    const copyEmbed = async () => {
      try {
        await navigator.clipboard.writeText(embedCode);
        setEmbedCopied(true);
        setTimeout(() => setEmbedCopied(false), 1600);
      } catch (e) { /* ignore */ }
    };

    const downloadVideo = () => {
      try {
        // prefer local/sample asset if present
        const href = SampleVideo || baseEmbed;
        const a = document.createElement("a");
        a.href = href;
        a.setAttribute("download", "");
        a.target = "_blank";
        document.body.appendChild(a);
        a.click();
        a.remove();
      } catch (e) { /* ignore */ }
    };
    // --- end share/embed/download ---
    
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

                    {/* CTA overlay top-left of the video */}
                    <div className={`video__cta-overlay ${embedOpen ? "is-open" : ""}`} role="region" aria-label="Share and actions">
                      <div className="video__cta-stack">
                        <button className="video__action video__action--small" onClick={shareVideo} aria-label="Share video">
                          <FaShareAlt /> <span className="visually-hidden">Share</span>
                        </button>
                        <button className="video__action video__action--small" onClick={() => setEmbedOpen((s) => !s)} aria-expanded={embedOpen} aria-controls="embed-panel" aria-label="Get embed code">
                          <FaLink /> <span className="visually-hidden">Embed</span>
                        </button>
                        <button className="video__action video__action--small" onClick={downloadVideo} aria-label="Download">
                          <FaDownload /> <span className="visually-hidden">Download</span>
                        </button>

                        <div className="video__social-ctas video__social-ctas--compact" aria-label="Follow">
                          {/* <a className="social-icon" href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                            <FaTwitter/>
                          </a> */}
                          <a className="social-icon" href="https://www.instagram.com/diagnosticmusic/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                            <FaInstagram/>
                          </a>
                          <a className="social-icon" href="https://www.youtube.com/@DiagnosticMusic0" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                            <FaYoutube/>
                          </a>
                        </div>

                        {/* embed panel rendered inside overlay for compact access */}
                        {embedOpen && (
                          <div id="embed-panel" className="video__embed-panel--overlay" role="region" aria-label="Embed code">
                            <div className="video__embed-header">
                              <strong>Embed</strong>
                              <button className="video__embed-close" onClick={() => setEmbedOpen(false)} aria-label="Close embed panel">✕</button>
                            </div>
                            <textarea readOnly value={embedCode} className="video__embed-text" rows={3} />
                            <div className="video__embed-actions">
                              <button className="video__action" onClick={copyEmbed} aria-label="Copy embed code">{embedCopied ? "Copied" : "Copy"}</button>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>

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