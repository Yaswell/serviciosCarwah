const express = require('express');
const app = express();
const clientsRouter = require('./routers/clients');
const insideServicesRouter = require ('./routers/inside-services');
const outsideServicesRouter = require('./routers/outside-services');
const plansRouter = require('./routers/plans');
const usersRouter = require('./routers/users');
const lavadoresRouter = require('./routers/lavadores');
const asesoresRouter = require('./routers/asesores');

const vehiclesRouter = require('./routers/vehicles');
const maedServicesRouter = require('./routers/maed-services');
const ordersRouter = require('./routers/orders');
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use(express.static('public'))
/*
app.use((req, res, next) => {

    // Dominio que tengan acceso (ej. 'http://example.com')
       res.setHeader('Access-Control-Allow-Origin', '*');
    
    // Metodos de solicitud que deseas permitir
       res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    
    // Encabecedados que permites (ej. 'X-Requested-With,content-type')
       res.setHeader('Access-Control-Allow-Headers', '*');
    
    next();
    })
*/
app.use(clientsRouter);
app.use(insideServicesRouter);
app.use(outsideServicesRouter);
app.use(plansRouter);
app.use(usersRouter);
app.use(vehiclesRouter);
app.use(maedServicesRouter);
app.use(ordersRouter);
app.use(lavadoresRouter)
app.use(asesoresRouter);

module.exports = app;