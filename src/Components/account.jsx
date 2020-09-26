import React, { useState } from 'react';
import { Report } from './report' 

export const Account = (props) => {

    const [show, setShow] = useState(false)
    return (
        <div className="account-container">
            <div>
                <h1>{props.data.title}</h1>
                <button onClick={() => setShow(!show)}>Show</button>
                <button onClick={() => props.removeAccount(props.idx)}>Remove</button>
            </div>
            <Report data={props.data.items} 
                    idx={props.idx} 
                    updateAccount={props.updateAccount}
                    show={show}
                    />
            {/* <button onClick={() => console.log(props.data)}>Check Account Info</button> */}
        </div>
    )
}