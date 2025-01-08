import React from "react"
import "./Form.css"

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
        <div>Form</div>
    );
};

export default Form;