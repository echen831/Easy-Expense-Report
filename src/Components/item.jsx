import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Item = (props) => {
    const [date, setDate] = useState(props.date ? props.date : "");
    const [desc, setDesc] = useState(props.desc ? props.desc : "");
    const [cat, setCat] = useState(props.cat ? props.cat : "");
    const [ammt, setAmmt] = useState(props.ammt ? props.ammt : "");

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

    const handleAmmtChange = (e) => {
        setAmmt(e.currentTarget.value);
    }

    const handleCatChange = (e) => {
        setCat(e.currentTarget.value)
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

            <form action="" onSubmit={handleSubmit}>
                <input type="date" ref={dateRef} value={date} onChange={handleDateChange} />
                <input type="text" ref={descRef} value={desc} onChange={handleDescChange} />
                <input type="text" ref={catRef} value={cat} onChange={handleCatChange}/>
                <input type="text" ref={ammtRef} value={ammt !== "0" ? ammt : ""} onChange={handleAmmtChange}/>
                {/* <input type="submit" style={{display: "none"}}/> */}
                <button type="submit"><FontAwesomeIcon icon="user-edit" /></button>
            </form>
            <p onClick={() => props.remove(props.idx)}><FontAwesomeIcon icon="trash" /></p>
        </div>
    )
};