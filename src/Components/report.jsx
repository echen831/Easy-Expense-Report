import React, { useState } from 'react';
import { Item } from './item';

const DATA = [
    {date: '2019-10-01', desc: 'Dog chewing toy', cat: 'Pets', ammt: 100.00 },
    { date: '2020-08-31', desc: 'Cake for birthday', cat: 'Food', ammt: 50.00 },
    { date: '2020-09-20', desc: 'Costco Run', cat: 'Groceries', ammt: 200.00 }
]

export const Report = () => {

    const [data, setData] = useState(DATA)

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
    };

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
                          idx={idx}
                          key={idx}
                    />
                ))}
            </ul>
            <button onClick={check}>Check</button>
        </div>
    )
};