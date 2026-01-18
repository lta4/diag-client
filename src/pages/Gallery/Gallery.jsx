import React, { useEffect, useState } from "react";
import "./Gallery.css";
import ScrollToTop from "react-scroll-to-top";

// load images from src/assets (webpack require.context supported in CRA)
function importAll(r) {
    return r.keys().map((key) => {
        const mod = r(key);
        return { src: mod.default || mod, name: key.replace("./", "") };
    });
}

const IMAGES = importAll(require.context("../../assets", false, /\.(png|jpe?g|jpeg|webp)$/));

function Gallery() {
    const [selected, setSelected] = useState(null); // index of selected image

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        function onKey(e) {
            if (selected == null) return;
            if (e.key === "Escape") setSelected(null);
            if (e.key === "ArrowRight") setSelected((s) => (s + 1) % IMAGES.length);
            if (e.key === "ArrowLeft") setSelected((s) => (s - 1 + IMAGES.length) % IMAGES.length);
        }
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [selected]);

    const open = (i) => setSelected(i);
    const close = () => setSelected(null);
    const prev = (e) => {
        e.stopPropagation();
        setSelected((s) => (s - 1 + IMAGES.length) % IMAGES.length);
    };
    const next = (e) => {
        e.stopPropagation();
        setSelected((s) => (s + 1) % IMAGES.length);
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
                <div className="gallery__grid">
                    {IMAGES.map((img, i) => (
                        <button
                            key={img.name + i}
                            className="gallery__item"
                            onClick={() => open(i)}
                            aria-label={`Open ${img.name}`}
                        >
                            <img src={img.src} alt={img.name} />
                            <div className="gallery__meta">{img.name.replace(/[-_]/g, " ")}</div>
                        </button>
                    ))}
                </div>
            </main>

            {selected != null && (
                <div className="gallery__modal" role="dialog" aria-modal="true" onClick={close}>
                    <div className="gallery__modal-inner" onClick={(e) => e.stopPropagation()}>
                        <button className="gallery__modal-close" onClick={close} aria-label="Close">×</button>
                        <button className="gallery__modal-prev" onClick={prev} aria-label="Previous">‹</button>
                        <img className="gallery__modal-img" src={IMAGES[selected].src} alt={IMAGES[selected].name} />
                        <button className="gallery__modal-next" onClick={next} aria-label="Next">›</button>
                        <div className="gallery__modal-caption">{IMAGES[selected].name.replace(/[-_]/g, " ")}</div>
                    </div>
                </div>
            )}
            <ScrollToTop smooth color="#fff" style={{ backgroundColor: '#000', borderRadius: '50%' }} />
        </div>
    );
}

export default Gallery;