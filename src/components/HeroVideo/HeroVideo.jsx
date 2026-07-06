import React, { useEffect, useRef, useState } from "react";
import "./HeroVideo.css";

/**
 * Props:
 * - src: string (required) - video file path / import
 * - poster: string (optional) - poster image path
 * - loopEnd: number (optional) - seconds to loop to (default 4)
 */
export default function HeroVideo({ src, poster, loopEnd = 4 }) {
    const ref = useRef(null);
    const wrapRef = useRef(null);
    const [edgeStyle, setEdgeStyle] = useState(null);

    useEffect(() => {
        const v = ref.current;
        if (!v) return;

        // Ensure muted autoplay works across browsers
        v.muted = true;
        v.plasInLine = true;
        const tryPlay = () => {
            const p = v.play();
            if (p && typeof p.then === "function") p.catch(() => {});
        };
        tryPlay();

        const onTime = () => {
            if (v.currentTime >= loopEnd) {
                v.currentTime = 0;
                // small play guard
                tryPlay();
            }
        };

        v.addEventListener("timeupdate", onTime);
        return () => v.removeEventListener("timeupdate", onTime);
    }, [loopEnd]);

    useEffect(() => {
        const wrap = wrapRef.current;
        if (!wrap) return;

        const calc = () => {
            const parent = wrap.parentElement || document.body;
            const pRect = parent.getBoundingClientRect();
            const docW = document.documentElement.clientWidth || window.innerWidth;
            const leftOffset = Math.round(pRect.left);                   // px to shift left
            const rightOffset = Math.round(docW - pRect.right);         // px to add to width on right

            // shift the wrapper left by parent's left offset and expand width to cover both gaps
            setEdgeStyle({
                left: `-${leftOffset}px`,
                width: `calc(100vw + ${leftOffset + rightOffset}px)`
            });
        };

        calc();
        const ro =
            typeof ResizeObserver !== "undefined"
                ? new ResizeObserver(calc)
                : null;
        if (ro && wrap.parentElement) ro.observe(wrap.parentElement);
        window.addEventListener("resize", calc, { passive: true });
        return () => {
            if (ro && wrap.parentElement) ro.disconnect();
            window.removeEventListener("resize", calc);
        };
    }, []);

    return (
        <div
            ref={wrapRef}
            className="heroVideo__wrap"
            style={edgeStyle || undefined}
            aria-hidden="true"
        >
            <video
                ref={ref}
                className="heroVideo"
                src={src}
                poster={poster}
                muted
                autoPlay
                playsInline
                preload="metadata"
                // no native loop; script handles short-segment loop
            />
        </div>
    );
}