import React, { useEffect, useState, useRef } from "react";
import "./Gallery.css";
import ScrollToTop from "react-scroll-to-top";
import IMAGES from "../../data/galleryData";

function Gallery() {
    const [selected, setSelected] = useState(null); // index of selected image
    const [copied, setCopied] = useState(false);
    const modalRef = useRef(null);
    const closeBtnRef = useRef(null);

    // entry animation: observe items and add .is-visible with a stagger using CSS var --i
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
                // simple focus trap inside modal
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

    return (
        <div className="gallery">
            <header className="gallery__hero">
                <div className="gallery__hero-inner">
                    <h2 className="gallery__title">Gallery</h2>
                    <p className="gallery__sub">A selection of images — click to enlarge. Use ← → to navigate.</p>
                </div>
            </header>

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
                            <div className="gallery__meta">{img.name.replace(/[-_]/g, " ")}</div>
                        </button>
                    ))}
                </div>
            </main>

            {selected != null && (
                <div className="gallery__modal" role="dialog" aria-modal="true" onClick={close}>
                    <div className="gallery__modal-inner" onClick={(e) => e.stopPropagation()} ref={modalRef}>
                        <button ref={closeBtnRef} className="gallery__modal-close" onClick={close} aria-label="Close">×</button>
                        <button className="gallery__modal-prev" onClick={prev} aria-label="Previous">‹</button>
                        <img className="gallery__modal-img" src={IMAGES[selected].src} alt={IMAGES[selected].name} />
                        <button className="gallery__modal-next" onClick={next} aria-label="Next">›</button>

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
        </div>
    );
}

export default Gallery;