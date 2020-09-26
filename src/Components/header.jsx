import React from 'react';
import { AddReport } from './add_report';

export const Header = (props) => {


    return (
        <div className='header-container'>
            <h1>My Expense Report</h1>
            <AddReport addAccount={props.addAccount}/>
            <button onClick={() => props.toggle('showAll')}>All</button>
        </div>
    )
};