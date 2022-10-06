const express = require('express');
const bodyParser = require('body-parser');
const talkerRoute = require('./routes/index');

const app = express();

app.use(bodyParser.json());
app.use('/', talkerRoute);

module.exports = app;
