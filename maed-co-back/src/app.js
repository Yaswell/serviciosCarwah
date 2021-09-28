const express = require('express');
const app = express();
const clientsRouter = require('./routers/clients');

app.use(express.json());
app.use(clientsRouter);

module.exports = app;