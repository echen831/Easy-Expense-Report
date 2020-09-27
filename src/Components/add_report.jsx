import React, { useState } from 'react';

export const AddReport = (props) => {
    const [ title, setTitle ] = useState("");

    const handleChange = (e) => {
        setTitle(e.currentTarget.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        props.addAccount(title);
        setTitle("");
        props.toggle("all")
    };

    return (
        <div className="add-form-container">
            <form action="" onSubmit={handleSubmit}>
                <input type="text" placeholder="Enter report title" value={title} onChange={handleChange} />
                <button type='submit'>Add Report</button>
            </form>
        </div>
    )
}