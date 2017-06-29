import express = require('express');
const app = express();

app.get('/customer', (request, response) => {
    let customers: Customer[];

    customers = [];
    for (let i = 1; i <= 5; i++) {
        customers.push({
            dni: (new String(i)).repeat(8),
            name: 'Cliente ' + i
        })
    }

    response.send(customers);
});

export interface Customer {
    dni: string;
    name: string;
}

module.exports = app;
