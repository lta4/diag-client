import React from "react";
import "./Term.css";
import PersonList from "../../components/PersonList/PersonList";
import PersonAdd from "../../components/PersonAdd/PersonAdd";

const Term = () => {
    return (
        <div className="legal">
            <PersonAdd />
            <PersonList />
        </div>
    );
};

export default Term;