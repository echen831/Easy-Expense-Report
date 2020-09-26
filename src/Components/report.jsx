import React, { useState } from 'react';
import { Item } from './item';
import { AddItem } from './add_item';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Report = (props) => {

    const [data, setData] = useState(props.data)

    const update = (currentIdx, date, desc, cat, ammt) => {
        let newData = data.map((item, idx) => {
            if (currentIdx === idx) {
                return {
                    date,
                    desc,
                    cat,
                    ammt
                }
            };

            return item;
        })
        setData(newData);
        props.updateAccount(props.idx, newData);
    };

    const add = (dataObj) => {

        if (dataObj.desc.trim() !== "" && dataObj.ammt !== "0") {
            let newData = [...data, dataObj]
            setData(newData);
            props.updateAccount(props.idx, newData);
        }
    }

    const remove = (idx) => {
        let newData = data.slice(0,idx).concat(data.slice(idx+1));
        setData(newData);
    }

    const check = () => {
        console.log(data)
    }

    const sum = (data) => {
        let s = data.reduce((a, c) => (a + parseFloat(c.ammt)), 0);
        return s.toFixed(2);

        // if(s % 1 === 0) {
        //     return s.toString().concat(".00");
        // }

        // let arr = s.toString().split(".");
        // if (arr[1].length === 1) {
        //     return s.toString().concat("0") 
        // } else {
        //     return s.toString();
        // }
    }
    
    return (
        <div className={ props.show ? "report-container" : "hide"}>
            <ul>
                {data.map((item, idx) => (
                    <Item date={item.date}
                          desc={item.desc}
                          cat={item.cat}
                          ammt={item.ammt}
                          update={update}
                          remove={remove}
                          idx={idx}
                          key={idx}
                    />
                ))}
                <AddItem add={add}/>
            </ul>
                <p>{`Total Expenses: $${sum(data)}`}</p>
            {/* <button onClick={check}>Check</button> */}
        </div>
    )
};