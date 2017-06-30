import express = require('express');
const app = express();

app.get('/customer', (request, response) => {
    response.send(CUSTOMERS);
});

app.get('/customer/:dni', (request, response) => {
    let dni = request.params.dni;
    let customer = CUSTOMERS.find(customer => dni == customer.dni);
    response.send(customer);
});

app.delete('/customer/:dni', (request, response) => {
    let dni = request.params.dni;
    let customer = CUSTOMERS.find(customer => dni == customer.dni);
    CUSTOMERS.splice(CUSTOMERS.indexOf(customer), 1);
    response.sendStatus(200);
});

let CUSTOMERS = [] as Customer[];

for (let i = 1; i <= 5; i++) {
    CUSTOMERS.push({
        dni: (new String(i)).repeat(8),
        name: 'Cliente ' + i
    });
}

export interface Customer {
    dni: string;
    name: string;
}

module.exports = app;
