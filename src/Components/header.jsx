import React from 'react';
import { AddReport } from './add_report';

export const Header = (props) => {


    return (
        <div className='header-container'>
            <h1>Easy Expense Report</h1>
            <AddReport addAccount={props.addAccount}/>
            <div>
                <button onClick={() => props.toggle('all')}>All</button>
                <button onClick={() => props.toggle('day')}>Day</button>
                <button onClick={() => props.toggle('week')}>Week</button>
                <button onClick={() => props.toggle('month')}>Month</button>
            </div>
        </div>
    )
};