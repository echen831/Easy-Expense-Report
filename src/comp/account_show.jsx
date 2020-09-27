import React, { useState } from "react";
import { TransactionShow } from "./transaction_show"

export const AccountShow = (props) => {

    const [ transactions, setTransactions ] = useState(props.account.transactions)

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
    };

    const updateTransactions = (transIdx, transaction) => {
        let newTransactions = transaction.map((trans, idx) => {
            if(transIdx === idx) {
                return transaction
            };
            return trans
        })

        setTransactions(newTransactions);
        props.updateTransaction(props.accIdx, transactions)
    }

    return (
        <div>
            <h1>{props.account.title}</h1>
            {console.log(props.account)}
            <ul> Transactions: 
                {transactions.map((trans, idx) => (
                    <TransactionShow key={idx}
                                     transId={idx} 
                                     trans={trans} 
                                     updateTransactions={updateTransactions}
                                     accIdx={props.idx}
                                     />
                ))}
            </ul>
            <p>Balance: ${findBalance()}</p>
        </div>
    )

};