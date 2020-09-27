import React, { useState } from "react";
import { TextForm } from "./forms/text_form";

export const TransactionShow = (props) => {

    const [ transaction, setTransaction ] = useState(props.trans)
    return (
        <div className="ts-container">
            <p>Type: {transaction.type} </p>
            <TextForm data={transaction.desc}/>
            <p>Amount: ${transaction.amount.toFixed(2)} </p>
            <p>Category: {transaction.cat} </p>
        </div>
    )
};