import React, { useImperativeHandle, useState } from 'react';

export const Item = (props) => {

    const [desc, setDesc] = useState(props.desc)

    const handleDescChange = (e) => {
        setDesc(e.currentTarget.value);
    }

    return (
        <div className='item-container'>
            <div>{props.date}</div>
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