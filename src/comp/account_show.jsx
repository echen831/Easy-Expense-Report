import React from "react";
import { TransactionShow } from "./transaction_show"

export const AccountShow = (props) => {

    const findBalance = () => {
        let bal = props.account.balance;

        props.account.transactions.forEach(trans => {
            if(trans.type === 'deposit') {
                bal += trans.amount
            } else {
                bal -= trans.amount
            }
        })

        return bal;
    }

    return (
        <div>
            <h1>{props.account.title}</h1>
            <ul> Transactions: 
                {props.account.transactions.map((trans, idx) => (
                    <TransactionShow key={idx} 
                                     trans={trans} 
                                     updateTransaction={props.updateTransaction}/>
                ))}
            </ul>
            <p>Balance: ${findBalance()}</p>
        </div>
    )

};