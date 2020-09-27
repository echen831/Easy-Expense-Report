import React from "react";

export const TransactionShow = (props) => {

    return (
        <div className="ts-container">
            <p>Type: {props.trans.type} </p>
            <p>Description: {props.trans.desc} </p>
            <p>Amount: ${props.trans.amount.toFixed(2)} </p>
            <p>Category: {props.trans.cat} </p>
        </div>
    )
};