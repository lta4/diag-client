import React, { useRef, useState, useEffect } from "react";
import "./StickyPlayer.css";

/**
 * Lightweight sticky mini-player.
 * - Provide `src` (video/audio), `poster` (thumbnail), and `title`.
 * - Hides on small screens by default.
 */
export default function StickyPlayer({ src, poster, title = "Now playing" }) {
  const mediaRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const m = mediaRef.current;
    if (!m) return;
    const onPlay = () => setPlaying(true);
    const onPause = () => setPlaying(false);
    m.addEventListener("play", onPlay);
    m.addEventListener("pause", onPause);
    return () => {
      m.removeEventListener("play", onPlay);
      m.removeEventListener("pause", onPause);
    };
  }, []);

  const toggle = () => {
    const m = mediaRef.current;
    if (!m) return;
    if (m.paused) m.play().catch(() => {});
    else m.pause();
  };

  return (
    <div className="sticky-player" role="region" aria-label="Sticky mini player">
      <div className="sticky-player__left">
        {poster ? (
          <img className="sticky-player__thumb" src={poster} alt={title} />
        ) : (
          <div className="sticky-player__thumb placeholder" aria-hidden="true" />
        )}
        <div className="sticky-player__meta">
          <div className="sticky-player__title">{title}</div>
          <button
            className="sticky-player__toggle"
            onClick={toggle}
            aria-pressed={playing}
            aria-label={playing ? "Pause" : "Play"}
          >
            {playing ? "Pause" : "Play"}
          </button>
        </div>
      </div>

      {/* hidden video element drives playback (use audio src if you prefer) */}
      <video ref={mediaRef} className="sticky-player__media" src={src} preload="metadata" />
    </div>
  );
}