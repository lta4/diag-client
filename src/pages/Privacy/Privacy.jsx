import { useEffect } from "react";
import "./Privacy.css"
import PersonList from "../../components/PersonList/PersonList";

function Privacy() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="legal">
            <PersonList />
        </div>
    );
};

export default Privacy