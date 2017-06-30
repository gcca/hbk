import express = require('express');
const app = express();

app.post('/payment', (request, response) => {
    response.send({
        amount: request.body.amount,
        customerDni: request.body.customer.dni,
        transferId: '987cef80-5db9-11e7-acab-a3f278f9057c'
    });
});

export interface Payment {
    amount: number;
    customerDni: string;
    transferId: string;
}

module.exports = app;
