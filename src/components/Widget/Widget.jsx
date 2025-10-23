import React, { useEffect, useRef } from "react";
import "./Widget.css"


function Widget(){

    const observerRef = useRef(null);
    const containerRef = useRef(null);

    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://widgetv3.bandsintown.com/main.min.js";
        script.async = true;

        document.body.appendChild(script);

        // Scope DOM surgery to the widget container to avoid interfering with React
        const observer = new MutationObserver((mutations) => {
            const container = containerRef.current;
            if (!container) return;
            for (const m of mutations) {
                for (const node of m.addedNodes) {
                    if (!node || node.nodeType !== 1) continue;
                    if (container.contains(node)) {
                        if (node.hasAttribute && node.hasAttribute('style')) node.removeAttribute('style');
                        if (node.querySelectorAll) {
                            const styled = node.querySelectorAll('[style]');
                            styled.forEach(el => el.removeAttribute('style'));
                        }
                    }
                }
            }
            // For each event, remove duplicate .bit-venue elements so only one venue appears per row
            try {
                const events = container.querySelectorAll('.bit-event');
                events.forEach(evt => {
                    try {
                        const venues = evt.querySelectorAll('.bit-venue');
                        if (venues && venues.length > 1) {
                            venues.forEach((el, idx) => {
                                if (idx !== 0 && el && el.parentNode) {
                                    el.parentNode.removeChild(el);
                                }
                            });
                        }
                    } catch (e) {
                        // ignore per-event DOM timing issues
                    }
                });
            } catch (e) {
                // ignore any container timing issues
            }

            // Reorder DOM for accessibility: ensure the titleWrapper (venue) precedes details/location
            try {
                const events2 = container.querySelectorAll('.bit-event');
                events2.forEach(evt => {
                    try {
                        const inner = evt.querySelector('.bit-details-inner-wrapper');
                        if (!inner) return;
                        const title = inner.querySelector('.bit-titleWrapper');
                        const details = inner.querySelector('.bit-details');
                        if (title && details && title.compareDocumentPosition(details) & Node.DOCUMENT_POSITION_FOLLOWING) {
                            // title comes after details — move it before
                            inner.insertBefore(title, details);
                        }
                    } catch (e) {
                        // ignore per-event timing issues
                    }
                });
            } catch (e) {
                // ignore
            }
        });

        observer.observe(document.body, { childList: true, subtree: true });
        observerRef.current = observer;

        return () => {
            // defensive removal to avoid removeChild NotFoundError
            try { if (script.parentNode) script.parentNode.removeChild(script); } catch (e) { /* ignore */ }
            if (observerRef.current) observerRef.current.disconnect();
        };
    }, []);

    return (

        <div ref={containerRef} className="bit-widget-initializer"
        
                data-artist-name="id_15582051"
                
                data-events-to-display=""
                data-background-color="rgba(0,0,0,1)"
                data-separator-color="rgba(0,0,0,1)"
                data-text-color="rgba(255,255,255,1)"
                data-font="Neue Haas Unica"
                data-auto-style="false"
                
                data-button-label-capitalization="uppercase"
                data-header-capitalization="uppercase"
                data-location-capitalization="uppercase"
                data-venue-capitalization="uppercase"
                data-display-local-dates="false"
                data-local-dates-position="tab"
                data-display-past-dates="false"
                data-display-details="false"
                data-display-lineup="false"
                data-display-start-time="false"
                data-social-share-icon="false"
                data-display-limit="all"
                
                data-date-format="M/D"
                data-date-orientation="horizontal"
                data-date-border-color="#4A4A4A"
                data-date-border-width="1px"
                data-date-capitalization="uppercase"
                data-date-border-radius="10px"
                
                data-event-ticket-cta-size="medium"
                data-event-custom-ticket-text=""
                data-event-ticket-text="TICKETS"
                data-event-ticket-icon="false"
                data-event-ticket-cta-text-color="rgba(255,255,255,1)"
                data-event-ticket-cta-bg-color="rgba(74,74,74,1)"
                data-event-ticket-cta-border-color="rgba(74,74,74,1)"
                data-event-ticket-cta-border-width="0px"
                data-event-ticket-cta-border-radius="2px"
                
                data-event-rsvp-position="hidden"
                data-event-rsvp-cta-size="medium"
                data-event-rsvp-only-show-icon="false"
                data-event-rsvp-text="RSVP"
                data-event-rsvp-icon="false"
                data-event-rsvp-cta-text-color="rgba(74,74,74,1)"
                data-event-rsvp-cta-bg-color="rgba(255,255,255,1)"
                data-event-rsvp-cta-border-color="rgba(74,74,74,1)"
                data-event-rsvp-cta-border-width="1px"
                data-event-rsvp-cta-border-radius="2px"
                
                data-follow-section-position="hidden"
                data-follow-section-alignment="center"
                data-follow-section-header-text="Get updates on new shows, new music, and more"
                data-follow-section-cta-size="medium"
                data-follow-section-cta-text="FOLLOW"
                data-follow-section-cta-icon="false"
                data-follow-section-cta-text-color="rgba(255,255,255,1)"
                data-follow-section-cta-bg-color="rgba(74,74,74,1)"
                data-follow-section-cta-border-color="rgba(74,74,74,1)"
                data-follow-section-cta-border-width="0px"
                data-follow-section-cta-border-radius="2px"
                
                data-play-my-city-position="hidden"
                data-play-my-city-alignment="center"
                data-play-my-city-header-text="Don’t see a show near you?"
                data-play-my-city-cta-size="medium"
                data-play-my-city-cta-text="REQUEST A SHOW"
                data-play-my-city-cta-icon="false"
                data-play-my-city-cta-text-color="rgba(255,255,255,1)"
                data-play-my-city-cta-bg-color="rgba(74,74,74,1)"
                data-play-my-city-cta-border-color="rgba(74,74,74,1)"
                data-play-my-city-cta-border-width="0px"
                data-play-my-city-cta-border-radius="2px"
                
                data-language="en"
                data-layout-breakpoint="900"
                data-app-id=""
                data-affil-code=""
                data-bit-logo-position="hidden"
                data-bit-logo-color="rgba(255,255,255,1)">
        </div>
    );
};

export default Widget;