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
        setData({...data, date: new Date(Number(arr[0]), Number(arr[1])-1, Number(arr[2]))});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.add(data)
        setData({ date: "", desc: "", cat: "", ammt: "0" });
    };

    const showDate = () => {
        let month = data.date.getMonth()+1;
        let day = data.date.getDate();
        if (month < 10) {
            month = "0" + month;
        }

        if (day < 10) {
            day = "0" + day;
        }

        return `${data.date.getFullYear()}-${month}-${day}`;
    }

    return (
        <div className="item-container">
            <form onSubmit={handleSubmit}>
                <input type="date" required value={data.date === "" ? "" : showDate()} onChange={handleDateChange}/>
                <input type="text" required value={data.desc} onChange={(e) => update(e, 'desc')}/>
                <input type="text" required value={data.cat} onChange={(e) => update(e, 'cat')}/>
                <input type="text" required value={data.ammt !== "0" ? data.ammt : "" } onChange={(e) => update(e, 'ammt')}/>
                <button type="submit"><FontAwesomeIcon icon="user-plus"/></button>
            </form>
        </div>
    )

}