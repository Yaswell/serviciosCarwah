const express = require('express');
const router = express.Router();
const ordersHandlers = require('../router-handlers/orders-handlers');

router.get('/orders', async (req, res) => {
    try {
        const orders = await ordersHandlers.find();
        if (orders.length !== 0) {
            return res.send(orders);
        }
        res.status(404).send({ error: "There are not orders stored" });
        
    } catch (error) {
        res.send(error);
    }
});

router.get('/orders/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const order = await ordersHandlers.findById(id);
        if (order) {
            return res.send(order);
        }
        res.status(404).send({ error: "Order not found!" });
        
    } catch (error) {
        res.status(500).send(error);
    }
});

router.get('/orders/client/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const orders = await ordersHandlers.findByClientId(id);
        if (orders.length !== 0) {
            return res.send(orders);
        }
        res.status(404).send({ error: "Orders not found!" });
        
    } catch (error) {
        res.status(500).send(error);
    }
});

router.post('/orders', async (req, res) => {
    try {
        const { orderDetails, clientId } = req.body;
        const order = await ordersHandlers.insert(orderDetails, clientId);
        if (order) {
            return res.status(201).send(order);
        }

    } catch (error) {
        if (error) {
           return res.status(400).send({ error: "Order not saved" });
        }
    }
});

router.put('/orders', async (req, res) => {
    try {
        const { orderDetails, clientId } = req.body;
        const order = await ordersHandlers.update(orderDetails, clientId);
        if (order) {
            return res.status(201).send(order);
        }
        res.status(400).send({ error: "This record does not exist" });

    } catch (error) {
        if (error) {
           return res.status(400).send({ error: "Order not updated" });
        }
    }
});

router.delete('/orders/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const order = await vehicleHandlers.delete(id);
        if (order) {
            res.status(201).send(order);
        }
        res.status(400).send({ error: "This record does not exist" });

    } catch (error) {
        if (error) {
           return res.status(400).send({ error: "Order not deleted" });
        }
    }
});

module.exports = router;