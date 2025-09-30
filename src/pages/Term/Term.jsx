import { useEffect } from "react";
import "./Term.css";
import PersonList from "../../components/PersonList/PersonList";
// import PersonAdd from "../../components/PersonAdd/PersonAdd";
import Blog from "../../components/Blog/Blog";
import ScrollToTop from "react-scroll-to-top";


function Term() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className="legal">
            {/* <PersonAdd /> */}
            <PersonList />
            <Blog />
            <ScrollToTop className="hero__scroll" />
        </div>
    );
};

export default Term;