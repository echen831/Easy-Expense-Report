import React from 'react';
import { Report } from './report' 

export const Account = (props) => {

    return (
        <div className="account-container">
            <h1>{props.data.title}</h1>
            <Report data={props.data.items}/>
        </div>
    )
}