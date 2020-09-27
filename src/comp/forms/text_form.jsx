import React, { useState } from "react";

export const TextForm = (props) => {

    const [text, setText] = useState(props.data);

    const handleChange = (e) => {
        setText(e.currentTarget.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <form action="">
            <input type="text" value={text} onChange={handleChange}/>
        </form>
    )

};