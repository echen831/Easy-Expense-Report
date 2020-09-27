import React, { useState } from 'react';
import { Item } from "../item"

export const WeekReport = (props) => {

    // let allItems = props.data.reduce((a,c) => a.concat(c.items),[]);

    return (
        <div className={!props.showWeek ? "hide" : ""}>
            Weekly Report
        </div>
    )
};