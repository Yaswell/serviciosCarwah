const express = require('express');
const router = express.Router();
const outsideServiceHandlers = require('../router-handlers/outside-services-handlers');

router.get('/outside_services', async(req, res)=> {
    try {
        const service = await outsideServiceHandlers.find();
        if(service.length !==0) {
            return res.send(service);
        } 
        res.status(404).send({ error: "There are not services stored" });
    } catch (error) {
        res.send(error);
    }
}) 

router.get('/outside_services/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const service = await outsideServiceHandlers.findById(id);
        if (service) {
            return res.send(service);
        }else {
            res.status(404).send({ error: "Services not found!" });
        }
        
        
    } catch (error) {
        res.send(error).status(500);
    }
});

router.post('/outside_services', async (req, res) => {
    try {
        const { desconPintura, reconsPintura, hidPlasticos, enceradoMano, enceradoMaquina, pulidoFocos, tipoVehiculo } = req.body;
        const service = await outsideServiceHandlers.insert(desconPintura, reconsPintura, hidPlasticos, enceradoMano, enceradoMaquina, pulidoFocos, tipoVehiculo);
        if (service) {
            return res.status(201).send(service);
        }

    } catch (error) {
        if (error) {
           return res.status(400).send({ error: "Service not saved" });
        }
    }
});

router.put('/outside_services/:id', async (req, res) => {
    try {
        const { id, desconPintura, reconsPintura, hidPlasticos, enceradoMano, enceradoMaquina, pulidoFocos, tipoVehiculo } = req.body;
        const service = await outsideServiceHandlers.update(id, desconPintura, reconsPintura, hidPlasticos, enceradoMano, enceradoMaquina, pulidoFocos, tipoVehiculo);
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
router.delete('/outside_services/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const service = await outsideServiceHandlers.delete(id);
        if (service) {
            res.status(201).send(service);
        }else{
            res.status(404).send({ error: "This record does not exist" });
        }
        

    } catch (error) {
        if (error) {
           return res.status(400).send({ error: "Service not errased" });
        }
    }
});

module.exports = router;