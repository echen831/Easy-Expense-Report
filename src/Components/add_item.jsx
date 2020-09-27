import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const AddItem = (props) => {

    const [ data, setData ] = useState({date: "", desc: "", cat: "", ammt: "0"});

    const update = (e, field) => {
        let newData = {
            ...data,
            [field]: e.currentTarget.value
        }
        setData(newData)
    };

    const handleDateChange = (e) => {
        let arr = e.currentTarget.value.split("-")
        setData({date: new Date(arr[0], arr[1], arr[2])});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.add(data)
        setData({ date: "", desc: "", cat: "", ammt: "0" });
    };

    return (
        <div className="item-container">
            <form  onSubmit={handleSubmit}>
                <input type="date" required value={data.date} onChange={handleDateChange}/>
                <input type="text" required value={data.desc} onChange={(e) => update(e, 'desc')}/>
                <input type="text" required value={data.cat} onChange={(e) => update(e, 'cat')}/>
                <input type="text" required value={data.ammt !== "0" ? data.ammt : "" } onChange={(e) => update(e, 'ammt')}/>
                <button type="submit"><FontAwesomeIcon icon="user-plus" /></button>
            </form>
        </div>
    )

}