export const DATA = [
    {
        title: "My first report", 
        items: [
            { date: new Date(2020, 9, 11), desc: 'Dog chewing toy', cat: 'Pets', ammt: 100.00 },
            { date: new Date(2020, 8, 30), desc: 'Cake for birthday', cat: 'Food', ammt: 50.00 },
            { date: new Date(2020, 7, 20), desc: 'Costco Run', cat: 'Groceries', ammt: 200.00 } 
        ] },
    {
        title: "My second report",
        items: [
            { date: new Date(2019, 11, 30), desc: 'Milk', cat: 'Grocery', ammt: 4.99 },
            { date: new Date(2020, 1, 29), desc: 'Gas', cat: 'Transportation', ammt: 40.00 },
            { date: new Date(2020, 1, 28), desc: 'Movie Tickets', cat: 'Entertainment', ammt: 36.29 }
        ]
    }
]

export const ACCOUNTS = [
    {
        title: "My First Account",
        balance: 0,
        transactions: [
            {
                type: "deposit",
                amount: 500.00,
                desc: "Paycheck",
                cat: "Deposit",
                date: new Date(2020, 9, 1)
            },
            {
                type: "expense",
                amount: 128.00,
                desc: "Dinner",
                cat: "Food",
                date: new Date(2020, 9, 17)
            },
            {
                type: "expense",
                amount: 40.00,
                desc: "Baseball Game",
                cat: "Entertainment",
                date: new Date(2020, 9, 23)
            },
            {
                type: "expense",
                amount: 39.28,
                desc: "Gas",
                cat: "Transportation",
                date: new Date(2020, 9, 23)
            }

        ]
    }
]