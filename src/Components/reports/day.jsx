import React from 'react';

export const DayReport = (props) => {

    return (
        <div className={props.showDay ? "" : "hide"}>
            Today's Report
        </div>
    )
};