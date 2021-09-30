const express = require('express');
const app = express();
const clientsRouter = require('./routers/clients');
const inside_servicesRouter = require ('./routers/inside-services');
const outside_servicesRouter = require('./routers/outside-services');

app.use(express.json());
app.use(clientsRouter);
app.use(inside_servicesRouter)
app.use(outside_servicesRouter)
module.exports = app;

