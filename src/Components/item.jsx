import React, { useState, useEffect } from 'react';

export const Item = (props) => {
    const [date, setDate] = useState(props.date);
    const [desc, setDesc] = useState(props.desc);
    const [cat, setCat] = useState(props.cat);
    const [ammt, setAmmt] = useState(props.ammt);

    // useEffect(() => {
    //     const listener = e => {
    //         if(e.code === 'Enter') {
    //             handleSubmit(e);
    //         }
    //     }

    //     document.addEventListener("keydown", listener);
    //     return () => {
    //         document.removeEventListener("keydown", listener)
    //     }
    // }, [])

    const handleDescChange = (e) => {
        setDesc(e.currentTarget.value);
    }

    const handleDateChange = (e) => {
        setDate(e.currentTarget.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.update(props.idx, date, desc, cat, ammt);
    }

    return (
        <div className='item-container'>

            <form action="">
                <input type="date" value={date} onChange={handleDateChange} />
                <input type="text" value={desc} onChange={handleDescChange} />
                <input type="text" value={cat}/>
                <input type="text" value={ammt}/>
            </form>
        </div>
    )
};