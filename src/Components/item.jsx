import React from 'react';

export const Item = (props) => {

    return (
        <div className='item-container'>
            <div>{props.date}</div>
            <div>{props.desc}</div>
            <div>{props.cat}</div>
            <div>{props.ammt}</div>
        </div>
    )
};