import React from 'react';
import { AddReport } from './add_report';

export const Header = (props) => {


    return (
        <div className='header-container'>
            <h1>Easy Expense Report</h1>
            <AddReport addAccount={props.addAccount} toggle={props.toggle}/>
            <div className='report-control'>
                <p onClick={() => props.toggle('all')}>All</p>
                <p onClick={() => props.toggle('day')}>Day</p>
                <p onClick={() => props.toggle('week')}>Week</p>
                <p onClick={() => props.toggle('month')}>Month</p>
            </div>
        </div>
    )
};