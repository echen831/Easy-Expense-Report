import React, { useState } from 'react';

export const Header = (props) => {

    const [title, setTitle] = useState("");

    const handleChange = (e) => {
        setTitle(e.currentTarget.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.add(title);
    }
    return (
        <div className='header-container'>
            <h1>My Expense Report</h1>
            <form action="" onSubmit={handleSubmit}>
                <input type="text" value={title} onChange={handleChange}/>
                <button type='submit'>Add Report</button>
            </form>
        </div>
    )
};