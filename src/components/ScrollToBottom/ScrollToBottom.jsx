import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToBottom = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, document.body.scrollHeight);
    }, [pathname]);

    return null;
};

export default ScrollToBottom;