const express = require('express');
const router = express.Router();
const maedServicesHandlers = require('../router-handlers/maed-services-handlers');

router.get('/maed-services', async (req, res) => {
    try {
        const services = await maedServicesHandlers.find();
        if (services.length !== 0) {
            return res.send(services);
        }else {
            res.status(404).send({ error: "There are not services stored" });    
        }
        
        
    } catch (error) {
        res.send(error);
    }
});

router.get('/maed-services/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const service = await maedServicesHandlers.findById(id);
        if (service) {
            return res.send(service);
        }else { 
            res.status(404).send({ error: "Service not found!" });
        }
        
        
    } catch (error) {
        res.status(500).send(error);
    }
});

router.get('/maed-services/client/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const services = await maedServicesHandlers.findByClientId(id);
        if (services.length !== 0) {
            return res.send(services);
        }else {
            res.status(404).send({ error: "Services not found!" });
        }
        
        
    } catch (error) {
        res.status(500).send(error);
    }
});

router.post('/maed-services', async (req, res) => {
    try {
        const { washer, adviser, leftObjects, crashes, clientId } = req.body;
        const service = await maedServicesHandlers.insert(washer, adviser, leftObjects, crashes, clientId);
        if (service) {
            return res.status(201).send(service);
        }

    } catch (error) {
        if (error) {
           return res.status(400).send({ error: "Service not saved" });
        }
    }
});

router.put('/maed-services', async (req, res) => {
    try {
        const { washer, adviser, leftObjects, crashes, clientId } = req.body;
        const service = await maedServicesHandlers.update(washer, adviser, leftObjects, crashes, clientId);
        if (service) {
            return res.status(201).send(service);
        }else {
            res.status(400).send({ error: "This record does not exist" });
        }
        

    } catch (error) {
        if (error) {
           return res.status(400).send({ error: "Service not updated" });
        }
    }
});

router.delete('/maed-services/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const service = await vehicleHandlers.delete(id);
        if (service) {
            res.status(201).send(service);

        }else { 
            res.status(400).send({ error: "This record does not exist" });
        }
        

    } catch (error) {
        if (error) {
           return res.status(400).send({ error: "Service not deleted" });
        }
    }
});

module.exports = router;