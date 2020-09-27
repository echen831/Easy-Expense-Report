import React from "react";
import { TextForm } from "./forms/text_form";

export const TransactionShow = (props) => {

    return (
        <div className="ts-container">
            <p>Type: {props.trans.type} </p>
            <TextForm data={props.trans.desc}/>
            <p>Amount: ${props.trans.amount.toFixed(2)} </p>
            <p>Category: {props.trans.cat} </p>
        </div>
    )
};