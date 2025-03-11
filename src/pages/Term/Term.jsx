import React from "react";
import "./Term.css";
import PersonList from "../../components/PersonList/PersonList";
// import PersonAdd from "../../components/PersonAdd/PersonAdd";
import Blog from "../../components/Blog/Blog";

const Term = () => {
    return (
        <div className="legal">
            {/* <PersonAdd /> */}
            <PersonList />
            {/* <Blog /> */}
        </div>
    );
};

export default Term;