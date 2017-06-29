const express = require('express');
const cors    = require('express-cors');
const app     = express();

app.use(cors({
    allowedOrigins: [ 'http://localhost:3000' ]
}));

const prefix = '/';

app.get('/', function (request, response) {
    response.send({
        title: 'HBK'
    });
});

[
    './customer',
    './payment'
].forEach(module => app.use(prefix, require(module)));

app.listen(8000, () => {
    console.log('Stub server started');
});
