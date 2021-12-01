const express = require('express');
const router = express.Router();
const vehicleHandlers = require('../router-handlers/vehicles-handlers');

router.get('/vehicles', async (req, res) => {
    try {
        const vehicles = await vehicleHandlers.find();
        if (vehicles.length !== 0) {
            return res.send(vehicles);
        }else {
            res.status(404).send({ error: "There are not vehicles stored" });
        }
       
        
    } catch (error) {
        res.send(error);
    }
});

router.get('/vehicles/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const vehicle = await vehicleHandlers.findById(id);
        if (vehicle) {
            return res.send(vehicle);
        }else {
            res.status(404).send({ error: "Vehicle not found!" });
        }
        
        
    } catch (error) {
        res.status(500).send(error);
    }
});

router.get('/vehicles/plate/:plate', async (req, res) => {
    try {
        const { plate } = req.params;
        const vehicles = await vehicleHandlers.findByPlate(plate);
        if (vehicles.length !== 0) {
            return res.send(vehicles);
        }else { 
            res.status(404).send({ error: "Vehicles not found!" });
        }
        
        
    } catch (error) {
        res.status(500).send(error);
    }
});

router.get('/vehicles/client/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const vehicles = await vehicleHandlers.findByClientId(id);
        if (vehicles.length !== 0) {
            return res.send(vehicles);
        }else {
            res.status(404).send({ error: "Vehicles not found!" });    
        }
        
        
    } catch (error) {
        res.status(500).send(error);
    }
});

router.post('/vehicles', async (req, res) => {
    try {
        const { brand, model, plate, color, vehicleType, clientId } = req.body;
        const vehicle = await vehicleHandlers.insert(brand, model, plate, color, vehicleType, clientId);
        if (vehicle) {
            return res.status(201).send(vehicle);
        }

    } catch (error) {
        if (error) {
           return res.status(400).send({ error: "Vehicle not saved" });
        }
    }
});

router.put('/vehicles', async (req, res) => {
    try {
        const { id, brand, model, plate, color, vehicleType } = req.body;
        const vehicle = await vehicleHandlers.update(id, brand, model, plate, color, vehicleType);
        if (vehicle) {
            return res.status(201).send(vehicle);
        }else { 
            res.status(400).send({ error: "This record does not exist" });
        }
        

    } catch (error) {
        if (error) {
           return res.status(400).send({ error: "Vehicle not updated" });
        }
    }
});

router.delete('/vehicles/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const vehicle = await vehicleHandlers.delete(id);
        if (vehicle) {
            res.status(201).send(vehicle);
        }else { 
            res.status(400).send({ error: "This record does not exist" });
        }
       

    } catch (error) {
        if (error) {
           return res.status(400).send({ error: "Vehicle not deleted" });
        }
    }
});

module.exports = router;