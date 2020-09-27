import React from 'react';
import { Account } from '../account';

export const AllReports = ({data, updateAccount, removeAccount, showAll}) => {

    return (
        <div className={!showAll ? "hide" : ""}>

            <ul>
                {data.map((acc, idx) => {
                    return <Account data={acc}
                        idx={idx}
                        key={idx}
                        updateAccount={updateAccount}
                        removeAccount={removeAccount}
                        />
                    })}
            </ul>
        </div>
    )

};