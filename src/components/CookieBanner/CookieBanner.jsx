import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import "./CookieBanner.css";

export default function CookieBanner() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem("cookieConsent");

        if (!consent) {
            setVisible(true);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem("cookieConsent", "accepted");
        setVisible(false);

        window.dispatchEvent(new Event("cookieAccepted"));
    };

    const handleDecline = () => {
        localStorage.setItem("cookieConsent", "declined");
        setVisible(false);
    };

    if (!visible) return null;

    return (
        <div style={styles.banner}>
            <div style={styles.text}>
                <Link to="/privacy-policy" style={styles.link}>
                    Privacy Policy
                </Link>
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
    banner: {
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: "#111",
        color: "fff",
        padding: "16px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        zIndex: 9999,
        flexWrap: "wrap",
    },
    text: {
        fontSize: "0.9rem",
        maxWidth: "70%",
    },
    link: {
        color: "#4da6ff",
        textDecoration: "underline",
    },
    buttons: {
        display: "flex",
        gap: "10px",
        marginTop: "10px",
    },
    accept: {
        backgroundColor: "#4da6ff",
        border: "none",
        padding: "8px 14px",
        cursor: "pointer",
    },
    decline: {
        backgroundColor: "transparent",
        border: "1px solid #999",
        padding: "8px 14px",
        cursor: "pointer",
    },
};