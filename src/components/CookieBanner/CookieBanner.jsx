import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function CookieBanner() {
    const [visible, setVisible] = useState(false);
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem("cookieConsent");

        if (!consent) {
            setVisible(true);

            // trigger animation slightly after mount
            setTimeout(() => setAnimate(true), 50);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem("cookieConsent", "accepted");
        setVisible(false);
        setTimeout(() => setVisible(false), 300);

        window.dispatchEvent(new Event("cookieAccepted"));
    };

    const handleDecline = () => {
        localStorage.setItem("cookieConsent", "declined");
        setVisible(false);
        setTimeout(() => setVisible(false), 300);
    };

    if (!visible) return null;

    return (
        <div
            style={{
                ...styles.card,
                opacity: animate ? 1 : 0,
                transform: animate ? "translateY(0)" : "translateY(20px)",
            }}
        >
            <div style={styles.text}>
                We use cookies to improve your experience and analyze traffic. By clicking "Accept", you agree to our {" "}
                <Link to="/privacy-policy" style={styles.link}>
                    Privacy Policy
                </Link>.
            </div>

            <div style={styles.buttons}>
                <button onClick={handleDecline} style={styles.decline}>
                    Decline
                </button>
                <button onClick={handleAccept} style={styles.accept}>
                    Accept
                </button>
            </div>
            
        </div>
    );
}

const styles = {
    card: {
        position: "fixed",
        bottom: "10px",
        right: "6rem",
        width: "90%",
        maxWidth: "360px",
        padding: "20px",
        borderRadius: "16px",
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
        background: "rgba(20, 20, 20, 0.75)",
        color: "#fff",
        boxShadow: "0 8px 30px rgba(0,0,0,0.4)",
        zIndex: 9999,
        transition: "all 0.3s ease",
    },
    text: {
        fontSize: "0.85rem",
        lineHeight: "1.4",
        marginBottom: "12px",
    },
    link: {
        color: "#7ab8ff",
        textDecoration: "underline",
    },
    buttons: {
        display: "flex",
        justifyContent: "flex-end",
        gap: "10px",
    },
    accept: {
        backgroundColor: "#7ab8ff",
        border: "none",
        padding: "8px 14px",
        borderRadius: "8px",
        cursor: "pointer",
        fontWeight: 500,
    },
    decline: {
        backgroundColor: "transparent",
        border: "1px solid rgba(255,255,255,0.4)",
        color: "#fff",
        padding: "8px 14px",
        borderRadius: "8px",
        cursor: "pointer",
    },
};