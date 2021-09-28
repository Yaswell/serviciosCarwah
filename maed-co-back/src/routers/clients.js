const express = require('express');
const router = express.Router();
const clientsHandlers = require('../router-handlers/clients-handlers');

router.get('/clients', async (req, res) => {
    try {
        const users = await clientsHandlers.find();
        if (users.length !== 0) {
            return res.send(users);
        }
        res.status(404).send({ error: "There are not clients stored" });
        
    } catch (error) {
        res.send(error);
    }
});

router.get('/clients/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const user = await clientsHandlers.findById(id);
        if (user) {
            return res.send(user);
        }
        res.status(404).send({ error: "Clients not found!" });
        
    } catch (error) {
        res.send(error).status(500);
    }
});

router.get('/clients/phone/:phone', async (req, res) => {
    try {
        const { phone } = req.params;
        const users = await clientsHandlers.findByPhone(phone);
        if (users.length !== 0) {
            return res.send(users);
        }
        res.status(404).send({ error: "Clients not found!" });
        
    } catch (error) {
        res.send(error).status(500);
    }
});

router.get('/clients/email/:email', async (req, res) => {
    try {
        const { email } = req.params;
        const users = await clientsHandlers.findByEmail(email);
        if (users.length !== 0) {
            return res.send(users);
        }
        res.status(404).send({ error: "Clients not found!" });
        
    } catch (error) {
        res.status(500).send(error);
    }
});

router.post('/clients', async (req, res) => {
    try {
        const { firstName, lastName, phone, email } = req.body;
        const user = await clientsHandlers.insert(firstName, lastName, phone, email);
        if (user) {
            return res.status(201).send(user);
        }

    } catch (error) {
        if (error) {
           return res.status(400).send({ error: "Client not saved" });
        }
    }
});

router.put('/clients', async (req, res) => {
    try {
        const { id, firstName, lastName, phone, email } = req.body;
        const user = await clientsHandlers.update(id, firstName, lastName, phone, email);
        if (user) {
            return res.status(201).send(user);
        }
        res.status(400).send({ error: "This record does not exist" });

    } catch (error) {
        if (error) {
           return res.status(400).send({ error: "Client not updated" });
        }
    }
});

router.delete('/clients/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const user = await clientsHandlers.delete(id);
        if (user) {
            res.status(201).send(user);
        }
        res.status(400).send({ error: "This record does not exist" });

    } catch (error) {
        if (error) {
           return res.status(400).send({ error: "Client not updated" });
        }
    }
});

module.exports = router;