import express = require('express');
const app = express();

app.get('/payment', (request, response) => {
    response.send({
        transferId: 'string'
    });
});

export interface Payment {
    transferId: string;
}

module.exports = app;
