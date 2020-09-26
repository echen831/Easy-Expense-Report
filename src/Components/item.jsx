import React, { useImperativeHandle, useState } from 'react';

export const Item = (props) => {
    const [date, setDate] = useState(props.date)
    const [desc, setDesc] = useState(props.desc)

    const handleDescChange = (e) => {
        setDesc(e.currentTarget.value);
    }

    const handleDateChange = (e) => {
        setDate(e.currentTarget.value);
    }

    return (
        <div className='item-container'>
            <div>
                <form action="">
                    <input type="date" placeholder={date} onChange={handleDateChange}/>
                </form>
            </div>
            <div>
                <form action="">
                    <input type="text" value={desc} onChange={handleDescChange}/>
                </form>
            </div>
            <div>{props.cat}</div>
            <div>{props.ammt}</div>
        </div>
    )
};