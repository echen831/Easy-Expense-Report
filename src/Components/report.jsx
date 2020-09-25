import React from 'react';
import { Item } from './item';

const DATA = [
    {date: '10/1/2019', desc: 'Dog chewing toy', cat: 'Pets', ammt: 100.00 },
    { date: '8/31/2020', desc: 'Cake for birthday', cat: 'Food', ammt: 50.00 },
    { date: '9/20/2020', desc: 'Costo Run', cat: 'Groceries', ammt: 200.00 }
]

export const Report = () => {
    return (
        <div className="report-container">
            <ul>
                {DATA.map(item => (
                    <Item date={item.date}
                          desc={item.desc}
                          cat={item.cat}
                          ammt={item.ammt}
                    />
                ))}
            </ul>
        </div>
    )
};