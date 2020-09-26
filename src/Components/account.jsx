import React, { useState } from 'react';
import { Report } from './report';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Account = (props) => {

    const [show, setShow] = useState(false)
    return (
        <div className="account-container">
            <div className='account-header'>
                <h3>{props.data.title}</h3>
                <p onClick={() => setShow(!show)}>
                    {show ? <FontAwesomeIcon icon="chevron-up" /> : <FontAwesomeIcon icon="chevron-down" />} 
                </p>
                <p onClick={() => props.removeAccount(props.idx)}><FontAwesomeIcon icon="trash"/></p>
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