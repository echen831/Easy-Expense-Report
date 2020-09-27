import React, { useState } from 'react';

export const WeekReport = (props) => {

    return (
        <div className={!props.showWeek ? "hide" : ""}>
            Weekly Report
        </div>
    )
};