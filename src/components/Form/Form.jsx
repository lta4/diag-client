import { useState } from "react";
import React from "react";
import "./Form.css";

const Form = () => {

    const [formData, setFormData] = React.useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        console.log("event:" , e)
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Form Submitted");
    };

    return (
        <div>
            <form onSubmit={handleSubmit} autoComplete="on">
                <div>
                    <input
                        id="name"
                        name="firstname"
                        type="text"
                        className=""
                        placeholder=""
                        value={formData.name}
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