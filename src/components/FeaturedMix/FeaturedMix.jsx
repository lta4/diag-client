import React, { useEffect, useState } from 'react';
import './FeaturedMix.css';

const FeaturedMix = ({ poster, embedUrl, title, start, shouldPlay = false }) => {
    const [played, setPlayed] = useState(!!shouldPlay);

    useEffect(() => {
        if (shouldPlay) setPlayed(true);
    }, [shouldPlay]);

    const handlePlay = () => setPlayed(true);

    // Add autoplay + muted fallback so browsers that block autoplay without mute will still play
    const autoplayParams = `autoplay=1&mute=1`;
    const src = `${embedUrl}${embedUrl.includes('?') ? '&' : '?'}${autoplayParams}${start ? `&start=${start}` : ''}`;

    return (
        <div className="featured-mix">
            {!played ? (
                <div
                    className={`fm-poster`}
                    role="button"
                    tabIndex={0}
                    onClick={handlePlay}
                    onKeyDown={(e) => { if (e.key === 'Enter') handlePlay(); }}
                    aria-label={`Play ${title}`}
                >
                    <img src={poster} alt={`${title} poster`} loading="lazy" />
                    <div className="fm-play">
                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path d="M5 3v18l15-9L5 3z" fill="currentColor" />
                        </svg>
                    </div>
                </div>
            ) : (
                <div className="fm-embed">
                    <iframe
                        title={title}
                        className="fm-iframe"
                        src={src}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        referrerPolicy="strict-origin-when-cross-origin"
                    />
                </div>
            )}
        </div>
    );
};

export default FeaturedMix;
