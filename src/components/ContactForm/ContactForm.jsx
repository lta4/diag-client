import { useForm, ValidationError } from "@formspree/react";
import React from "react";
import "./ContactForm.css";

function ContactForm() {
    const [state, handleSubmit] = useForm("xyzzbedg");
    const [data, handleData] = React.useState({
        searchTerm: "data",
    });
    
    // const handleChange = (event) => {
    //     console.log("event:" , event)
    //     setFormData({ ...formData, [event.target.name]: event.target.value });
    // };
    if (state.succeeded) {
        return <p>Thanks for reaching for the best!</p>
    }

    // const handleSubmit = (event) => {
    //     event.preventDefault()
    //     props.movieSearch(formData.searchTerm)
    // }

    return (
        <form onSubmit={handleSubmit} autoComplete="on" className="contact" id="inquire">
            <h2 className="contact__des">Feel free to reach out!</h2>
            <input
                id="firstname"
                type="firstname"
                name="firstname"
                placeholder=" First Name"
            />
            <ValidationError
                prefix="First Name"
                field="firstname"
                errors={state.errors}
            />
            <input 
                id="lastname"
                type="lastname"
                name="lastname"
                placeholder=" Last Name"
            />
            <ValidationError
                prefix="Last Name"
                field="lastname"
                errors={state.errors}
            />
            <input
                id="email"
                type="email"
                name="email"
                placeholder=" Email Address"
            />
            <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
            />
            <textarea
                id="message"
                name="message"
                placeholder=" Drop a note!"
            />
            <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
            />
            <button type="submit" disabled={state.submitting}>
                Submit
            </button>
        </form>
    );
};

export default ContactForm;