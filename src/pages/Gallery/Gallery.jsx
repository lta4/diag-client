import React, { useEffect, useState, useRef } from "react";
import "./Gallery.css";
import ScrollToTop from "react-scroll-to-top";
import IMAGES from "../../data/galleryData";
import BGbackground from "../../assets/BGbackground.png";
import CDiagBanner from "../../assets/CDiagBanner.jpg";
import FeaturedMix from "../../components/FeaturedMix/FeaturedMix";
import SampleVideo from "../../assets/NOCTURNA.mp3";
import { FaInstagram, FaYoutube, FaDownload, FaShareAlt, FaLink } from "react-icons/fa";
import Newsletter from "../../components/Newsletter/Newsletter";

function Gallery() {

    const videoRef = useRef(null);

    const [played] = useState(false);
    const [mounted, setMounted] = useState(false);
    const [playingTitle] = useState("Featured Video");

    const [startTime] = useState(537);
    const [captionsOn] = useState(false);
    
    const baseEmbed = "https://www.youtube.com/embed/SK6WN-y5P-0";
    const computedEmbed = `${baseEmbed}?start=${startTime||0}&autoplay=${played?1:0}${captionsOn ? "&cc_load_policy=1" : ""}${played ? "&mute=1" : ""}`;
    
    // Share|Embed|Download|Social CTAs
    const [embedOpen, setEmbedOpen] = useState(false);
    const [shareCopied, setShareCopied] = useState(false);
    const [embedCopied, setEmbedCopied] = useState(false);
    
    const pageUrl = window.location.origin + "/Video#featured-video";
    const shareUrl = computedEmbed || pageUrl;

    // Image Index
    const [selected, setSelected] = useState(null); 
    const [copied, setCopied] = useState(false);
    const [titleTyped, setTitleTyped] = useState("");
    const [subTyped, setSubTyped] = useState("");
    const modalRef = useRef(null);
    const closeBtnRef = useRef(null);

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

    useEffect(() => {
            const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
            if (!prefersReduced) setMounted(true);
            else setMounted(false);
        }, []);

    // Entry Stagger Animation
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries, obs) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("is-visible");
                        obs.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.12, rootMargin: "0px 0px -80px 0px" }
        );

        const items = document.querySelectorAll(".gallery__grid--masonry .gallery__item");
        items.forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        function onKey(e) {
            if (selected == null) return;
            if (e.key === "Escape") { e.preventDefault(); close(); }
            if (e.key === "ArrowRight") { e.preventDefault(); next(e); }
            if (e.key === "ArrowLeft") { e.preventDefault(); prev(e); }
            if (e.key === "Tab") {
                // focus trap inside modal
                const root = modalRef.current;
                if (!root) return;
                const focusables = Array.from(root.querySelectorAll('button,a,[href],input,select,textarea,[tabindex]:not([tabindex="-1"])'))
                  .filter((el) => !el.hasAttribute('disabled') && el.offsetParent !== null);
                if (focusables.length === 0) return;
                const first = focusables[0];
                const last = focusables[focusables.length - 1];
                if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
                else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
            }
        }
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [selected]);

    const open = (i) => {
        setSelected(i);
        // focus close button after modal paints
        setTimeout(() => closeBtnRef.current && closeBtnRef.current.focus(), 50);
    };
    const close = () => setSelected(null);
    const prev = (e) => {
        e && e.stopPropagation();
        setSelected((s) => (s - 1 + IMAGES.length) % IMAGES.length);
    };
    const next = (e) => {
        e && e.stopPropagation();
        setSelected((s) => (s + 1) % IMAGES.length);
    };

    // share current image (uses Web Share if available, otherwise copy link)
    const shareCurrent = async () => {
        if (selected == null) return;
        const item = IMAGES[selected];
        const url = window.location.origin + item.src;
        if (navigator.share) {
            try { await navigator.share({ title: item.name, text: item.name, url }); return; } catch (e) { /* ignore */ }
        }
        try {
            await navigator.clipboard.writeText(url);
            setCopied(true);
            setTimeout(() => setCopied(false), 1600);
        } catch (e) { /* ignore */ }
    };

    // download current image
    const downloadCurrent = () => {
        if (selected == null) return;
        const item = IMAGES[selected];
        const a = document.createElement("a");
        a.href = item.src;
        a.download = (item.name || "image").replace(/\s+/g, "_") + ".jpg";
        document.body.appendChild(a);
        a.click();
        a.remove();
    };

    useEffect(() => {
      const title = "Diagnostic & Friends";
      const subtitle = "Live set with a curation of images — click to enlarge. Use ← → to navigate.";
      const prefersReduced = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (prefersReduced) {
        setTitleTyped(title);
        setSubTyped(subtitle);
        return;
      }

      let tIdx = 0;
      let sIdx = 0;
      const tDelay = 60; // ms per char for title
      const sDelay = 28; // ms per char for subtitle
      const startSubtitleAfter = title.length * tDelay + 350; // ms

      const typeTitle = () => {
        if (tIdx <= title.length) {
          setTitleTyped(title.slice(0, tIdx));
          tIdx++;
          setTimeout(typeTitle, tDelay);
        }
      };

      const typeSubtitle = () => {
        if (sIdx <= subtitle.length) {
          setSubTyped(subtitle.slice(0, sIdx));
          sIdx++;
          setTimeout(typeSubtitle, sDelay);
        }
      };

      typeTitle();
      const subTimer = setTimeout(typeSubtitle, startSubtitleAfter);

      return () => clearTimeout(subTimer);
    }, []);

    // render a fixed background behind the whole gallery page
    return (
      <>
        <div
          className="gallery__bg"
          aria-hidden="true"
          style={{ backgroundImage: `url(${BGbackground})` }}
        />
        <div className="gallery">
            {/* <div className="gallery__parallax"> */}
              <header className="gallery__hero">
                 <div className="gallery__hero-inner">
                     <h2 className="gallery__title gallery__title--typing">
                       <span aria-hidden="true">{titleTyped}</span>
                       <span className="typing-cursor" aria-hidden="true">▌</span>
                       <span className="sr-only">{titleTyped || "Diagnostic & Friends"}</span>
                     </h2>
                     <p className="gallery__sub gallery__sub--typing">
                       <span aria-hidden="true">{subTyped}</span>
                       <span className="typing-cursor typing-cursor--small" aria-hidden="true">▌</span>
                       <span className="sr-only">{subTyped || "Live set with a curation of images — click to enlarge. Use left right arrows to navigate."}</span>
                     </p>
                 </div>
             </header>

            <div className="gallery__inner">
              <div className="video__container" ref={videoRef} id="featured-video">
                <div className="video__container--media">
                  <div className="video__title-overlay">
                    <h1>DIAGNOSTIC</h1>
                    <p>LIVE SET</p>
                  </div>
                <FeaturedMix poster={CDiagBanner} embedUrl={computedEmbed} title="Diagnostic - YouTube" start={startTime} shouldPlay={played} />

                {/* CTA overlay top-left of the video */}
                <div className={`video__cta-overlay ${embedOpen ? "is-open" : ""}`} role="region" aria-label="Share and actions">
                    <div className="video__cta-stack">
                        <button className="video__action video__action--small" onClick={shareVideo} aria-label="Share video">
                        <FaShareAlt />
                        <span className="visually-hidden">
                            Share
                        </span>
                        </button>
                        <button className="video__action video__action--small" onClick={() => setEmbedOpen((s) => !s)} aria-expanded={embedOpen} aria-controls="embed-panel" aria-label="Get embed code">
                          <FaLink /> 
                        <span className="visually-hidden">
                            Embed
                        </span>
                        </button>
                        {/* <button className="video__action video__action--small" onClick={downloadVideo} aria-label="Download">
                          <FaDownload />
                        <span className="visually-hidden">
                            Download
                        </span>
                        </button> */}

                        <div className="video__social-ctas video__social-ctas--compact" aria-label="Follow">
                          <a className="social-icon" href="https://www.instagram.com/diagnosticmusic/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                            <FaInstagram />
                          </a>
                          <a className="social-icon" href="https://www.youtube.com/@DiagnosticMusic0" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                            <FaYoutube />
                          </a>
                        </div>

                        {/* embed panel rendered inside overlay for compact access */}
                        {embedOpen && (
                        <div id="embed-panel" className="video__embed-panel--overlay" role="region" aria-label="Embed code">
                            <div className="video__embed-header">
                              <strong>Embed</strong>
                              <button className="video__embed-close" onClick={() => setEmbedOpen(false)} aria-label="Close embed panel">✕</button>
                            </div>
                            <label htmlFor="embed-code" className="visually-hidden">
                                Embed code
                            </label>
                            <textarea id="embed-code" readOnly value={embedCode} className="video__embed-text" rows={3} />
                            <div className="video__embed-actions">
                              <button className="video__action" onClick={copyEmbed} aria-label="Copy embed code">{embedCopied ? "Copied" : "Copy"}</button>
                            </div>
                        </div>
                        )}
                    </div>
                </div>

                    {/* <div className="video__controls-extra">
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
                    </div> */}

            </div>
        </div>

        <div className="video__meta video__meta--split" role="region" aria-label="Video information">
          <div className="video__meta-left">
            <h2 className="video__meta-title">Diagnostic</h2>
            <div className="video__meta-desc">Venue: Aero Club, San Diego</div>
            <div className="video__meta-desc">Genre: House / Minimal / Groove</div>
            <div className="video__meta-desc">Runtime: 30:26</div>
          </div>
          <div className="video__meta-right">
            <p className="video__meta-blurb">"A late-night set built for dark rooms and heavy movement."</p>
          </div>
        </div>

            {/* Insert video below the hero and above the gallery grid */}
            {/* <div className="gallery__video" aria-hidden={false}>
              <FeaturedMix poster={JFour} embedUrl={computedEmbed} title="Diagnostic - YouTube" start={startTime} shouldPlay={played}/>
            </div> */}

            <main className="gallery__body">
                {/* masonry grid: uses CSS columns for an organic masonry layout */}
                <div className="gallery__grid gallery__grid--masonry">
                    {IMAGES.map((img, i) => (
                        <button
                            key={img.name + i}
                            className="gallery__item"
                            style={{ ['--i']: i }}
                            onClick={() => open(i)}
                            aria-label={`Open ${img.name}`}
                        >
                            {/* lazy load for perf; keep img height auto so column masonry can vary heights */}
                            <img src={img.src} alt={img.name.replace(/[-_]+/g, " ").replace(/\.[^/.]+$/, "")} loading="lazy" />
                            {/* caption removed */}
                        </button>
                    ))}
                </div>
            </main>

            {selected != null && (
                <div className="gallery__modal" role="dialog" aria-modal="true" onClick={close}>
                    <div className="gallery__modal-inner" onClick={(e) => e.stopPropagation()} ref={modalRef}>
                        <button ref={closeBtnRef} className="gallery__modal-close" onClick={close} aria-label="Close">
                            ×
                        </button>
                        <button className="gallery__modal-prev" onClick={prev} aria-label="Previous">
                            ‹
                        </button>
                        <img className="gallery__modal-img" src={IMAGES[selected].src} alt={IMAGES[selected].name} />
                        <button className="gallery__modal-next" onClick={next} aria-label="Next">
                            ›
                        </button>

                        <div className="gallery__modal-caption">{IMAGES[selected].name.replace(/[-_]/g, " ")}</div>

                        <div className="gallery__modal-actions" aria-label="Image actions">
                          <button className="gallery__modal-action" onClick={downloadCurrent} aria-label="Download image">Download</button>
                          <button className="gallery__modal-action" onClick={shareCurrent} aria-label="Share image">{copied ? "Copied" : "Share"}</button>
                        </div>
                        <div className="sr-only" aria-live="polite">{copied ? "Link copied to clipboard" : ""}</div>
                    </div>
                </div>
            )}
            <ScrollToTop smooth color="#fff" style={{ backgroundColor: '#000', borderRadius: '50%' }} />
            <div>
              <Newsletter />
            </div>
            </div>
        {/* </div> */}
        </div>
        </>
    );
}

export default Gallery;