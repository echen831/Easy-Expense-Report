import React, { useState } from 'react';

export const AddItem = (props) => {

    const [ data, setData ] = useState({date: "", desc: "", cat: "", ammt: "0"});

    const update = (e, field) => {
        let newData = {
            ...data,
            [field]: e.currentTarget.value
        }
        setData(newData)
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        props.add(data)
    };

    return (
        <div className="item-container">
            <form  onSubmit={handleSubmit}>
                <input type="date" value={data.date} onChange={(e) => update(e, 'date')}/>
                <input type="text" value={data.desc} onChange={(e) => update(e, 'desc')}/>
                <input type="text" value={data.cat} onChange={(e) => update(e, 'cat')}/>
                <input type="text" value={data.ammt !== "0" ? data.ammt : "" } onChange={(e) => update(e, 'ammt')}/>
                <button type="submit">Add</button>
            </form>
        </div>
    )

}