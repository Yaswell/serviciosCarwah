const express = require('express');
const app = express();
const clientsRouter = require('./routers/clients');
const inside_servicesRouter = require ('./routers/inside-services');
const outside_servicesRouter = require('./routers/outside-services');
const plansRouter = require('./routers/plans');
const usersRouter = require('./routers/users');

app.use(express.json());
app.use(clientsRouter);
app.use(inside_servicesRouter)
app.use(outside_servicesRouter)
app.use(plansRouter);
app.use(usersRouter);


module.exports = app;