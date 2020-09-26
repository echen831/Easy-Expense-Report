import React, { useState } from 'react';
import { Item } from './item';
import { AddItem } from './add_item';

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
        let newData = [...data, dataObj]
        setData(newData);
        props.updateAccount(props.idx, newData);
    }

    const remove = (idx) => {
        let newData = data.slice(0,idx).concat(data.slice(idx+1));
        setData(newData);
    }

    const check = () => {
        console.log(data)
    }
    
    return (
        <div className="report-container">
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
                <p>{`Total Expense: ${data.reduce((a,c) => (a + parseFloat(c.ammt)),0)}`}</p>
            <button onClick={check}>Check</button>
        </div>
    )
};