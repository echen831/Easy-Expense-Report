import React, { useState, useEffect, useRef } from 'react';

export const Item = (props) => {
    const [date, setDate] = useState(props.date);
    const [desc, setDesc] = useState(props.desc);
    const [cat, setCat] = useState(props.cat);
    const [ammt, setAmmt] = useState(props.ammt);

    const dateRef = useRef();
    const descRef = useRef();
    const catRef = useRef();
    const ammtRef = useRef();

    // useEffect(() => {
    //     const listener = e => {
    //         if(e.code === 'Enter') {
    //             dateRef.current.blur();
    //             descRef.current.blur();
    //             catRef.current.blur();
    //             ammtRef.current.blur();
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
        dateRef.current.blur();
        descRef.current.blur();
        catRef.current.blur();
        ammtRef.current.blur();
    }

    return (
        <div className='item-container'>

            <form action="" onSubmit={(e) => handleSubmit(e)}>
                <input type="date" ref={dateRef} value={date} onChange={handleDateChange} />
                <input type="text" ref={descRef} value={desc} onChange={handleDescChange} />
                <input type="text" ref={catRef} value={cat}/>
                <input type="text" ref={ammtRef} value={ammt}/>
                <input type="submit" style={{display: "none"}}/>
            </form>
        </div>
    )
};