import React from 'react';
import { Report } from './report' 

export const Account = (props) => {

    return (
        <div className="account-container">
            <h1>{props.data.title}</h1>
            <Report data={props.data.items} idx={props.idx} updateAccount={props.updateAccount}/>
            <button onClick={() => console.log(props.data)}>Check Account Info</button>
            <button onClick={() => props.removeAccount(props.idx)}>Remove</button>
        </div>
    )
}