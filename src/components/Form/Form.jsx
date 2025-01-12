import React from "react";
import "./Form.css";

const Form = (props) => {

    const [formData, setFormData] = React.useState({
        searchTerm: "",
    });

    const handleChange = (event) => {
        console.log("event:" , event)
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault()
        props.movieSearch(formData.searchTerm)
    }

    return (
        <div>
            <form onSubmit={handleSubmit} autoComplete="on">
                <div>
                    <input
                        className=""
                        placeholder=""
                        type="text"
                        name="searchTerm"
                        value={formData.searchTerm}
                        oncChange={handleChange}
                    />
                    <input 
                        className="submitButton"
                        type="submit"
                        value="Submit"
                    />
                </div>
            </form>
        </div>
    );
};

export default Form;