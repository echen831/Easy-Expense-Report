import React from 'react';

export const MonthReport = (props) => {

    return (
        <div className={props.showMonth ? "" : "hide"}>
            Monthly Report
        </div>
    )
};