import bodyParser = require('body-parser');
import cors = require('express-cors');
import express = require('express');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors({
    allowedOrigins: [ 'http://localhost:3000' ]
}));

const prefix = '/';

app.get('/', function (request, response) {
    response.send({
        title: 'HBK - Stub'
    });
});

[
    './customer',
    './payment'
].forEach(module => app.use(prefix, require(module)));

app.listen(8000, () => {
    console.log('Stub server started');
});
