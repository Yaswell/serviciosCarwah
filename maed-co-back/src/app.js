const express = require('express');
const app = express();
const clientsRouter = require('./routers/clients');
const usersRouter = require('./routers/users');

app.use(express.json());
app.use(clientsRouter);
app.use(usersRouter);

module.exports = app;