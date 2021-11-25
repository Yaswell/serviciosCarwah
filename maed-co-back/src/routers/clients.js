const express = require('express');
const router = express.Router();
const clientsHandlers = require('../router-handlers/clients-handlers');

router.get('/clients', async (req, res) => {
    try {
        const clients = await clientsHandlers.find();
        if (clients.length !== 0) {
            return res.send(clients);
        }else { 
            res.status(404).send({ error: "There are not clients stored" });
        }
        
        
    } catch (error) {
        res.send(error);
    }
});

router.get('/clients/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const client = await clientsHandlers.findById(id);
        if (client) {
            return res.send(client);
        }else { 
            res.status(201).send({ error: "Clients not found!" });
        }
        
        
    } catch (error) {
        res.status(500).send(error);
    }
});

router.get('/clients/phone/:phone', async (req, res) => {
    try {
        const { phone } = req.params;
        const clients = await clientsHandlers.findByPhone(phone);
        if (clients.length !== 0) {
            return res.send(clients);
        } else { 
            res.status(404).send({ error: "Clients not found!" });
        }
       
        
    } catch (error) {
        res.status(500).send(error);
    }
});

router.get('/clients/email/:email', async (req, res) => {
    try {
        const { email } = req.params;
        const clients = await clientsHandlers.findByEmail(email);
        if (clients.length !== 0) {
            return res.send(clients);
        }else { 
            res.status(404).send({ error: "Clients not found!" });
        }
        
        
    } catch (error) {
        res.status(500).send(error);
    }
});

router.post('/clients', async (req, res) => {
    try {
        const { firstName, lastName, phone, email } = req.body;
        const client = await clientsHandlers.insert(firstName, lastName, phone, email);
        if (client) {
            return res.status(201).send(client);
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
        const client = await clientsHandlers.update(id, firstName, lastName, phone, email);
        if (client) {
            return res.status(201).send(client);
        }else {
            res.status(400).send({ error: "This record does not exist" });
        }
        

    } catch (error) {
        if (error) {
           return res.status(400).send({ error: "Client not updated" });
        }
    }
});

router.delete('/clients/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const client = await clientsHandlers.delete(id);
        if (client) {
            res.status(201).send(client);
        }else {
            res.status(404).send({ error: "This record does not exist" });
        }
        

    } catch (error) {
        if (error) {
           return res.status(400).send({ error: "Client not deleted" });
        }
    }
});

module.exports = router;