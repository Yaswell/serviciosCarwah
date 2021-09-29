const express = require('express');
const router = express.Router();
const insideServiceHandlers = require('../router-handlers/insider-services-handlers');

//Confirm if this is the DB or the reouter that goes here
router.get('/inside_services', async(req, res)=> {
    try {
        const service = await insideServiceHandlers.find();
        if(service.length !==0) {
            return res.send(service);
        } 
        res.status(404).send({ error: "There are not services stored" });
    } catch (error) {
        res.send(error);
    }
}) 

router.get('/inside_services/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const service = await insideServiceHandlers.findById(id);
        if (service) {
            return res.send(service);
        }
        res.status(404).send({ error: "Services not found!" });
        
    } catch (error) {
        res.send(error).status(500);
    }
});

router.post('/inside_services', async (req, res) => {
    try {
        const { hid_tablero_paneles, ozono, hid_leather_vynil, limpieza_interior,lavado_motor } = req.body;
        const service = await insideServiceHandlers.insert(hid_tablero_paneles, ozono, hid_leather_vynil, limpieza_interior,lavado_motor);
        if (service) {
            return res.status(201).send(service);
        }

    } catch (error) {
        if (error) {
           return res.status(400).send({ error: "Client not saved" });
        }
    }
});

router.put('/inside_services', async (req, res) => {
    try {
        const { id, hid_tablero_paneles, ozono, hid_leather_vynil, limpieza_interior,lavado_motor } = req.body;
        const service = await insideServiceHandlers.update(id, hid_tablero_paneles, ozono, hid_leather_vynil, limpieza_interior,lavado_motor);
        if (service) {
            return res.status(201).send(service);
        }
        res.status(400).send({ error: "This record does not exist" });

    } catch (error) {
        if (error) {
           return res.status(400).send({ error: "Client not updated" });
        }
    }
});
