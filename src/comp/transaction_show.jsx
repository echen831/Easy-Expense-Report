import React, { useState } from "react";
import { TextForm } from "./forms/text_form";

export const TransactionShow = (props) => {

    const [ transaction, setTransaction ] = useState(props.trans);

    const update = (field, data) => {
        setTransaction({...transaction, [field]:data});
        props.updateTransactions(props.transIdx, transaction);
    };


    return (
        <div className="ts-container">
            <p>Type: {transaction.type} </p>
            <TextForm data={transaction.desc} update={update}/>
            <p>Amount: ${transaction.amount.toFixed(2)} </p>
            <p>Category: {transaction.cat} </p>
        </div>
    )
};