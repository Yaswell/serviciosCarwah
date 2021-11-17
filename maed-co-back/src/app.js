const express = require('express');
const app = express();
const clientsRouter = require('./routers/clients');
const insideServicesRouter = require ('./routers/inside-services');
const outsideServicesRouter = require('./routers/outside-services');
const plansRouter = require('./routers/plans');
const usersRouter = require('./routers/users');
const vehiclesRouter = require('./routers/vehicles');
const maedServicesRouter = require('./routers/maed-services');
const ordersRouter = require('./routers/orders');

app.use(express.json());
app.use(express.static('public'))
app.use(clientsRouter);
app.use(insideServicesRouter);
app.use(outsideServicesRouter);
app.use(plansRouter);
app.use(usersRouter);
app.use(vehiclesRouter);
app.use(maedServicesRouter);
app.use(ordersRouter);


module.exports = app;