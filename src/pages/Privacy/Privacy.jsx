import { useEffect } from "react";
import "./Privacy.css"
import PersonList from "../../components/PersonList/PersonList";
import ScrollToTop from "react-scroll-to-top";

function Privacy() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="legal">
            <PersonList />
            <ScrollToTop className="hero__scroll" />
        </div>
    );
};

export default Privacy