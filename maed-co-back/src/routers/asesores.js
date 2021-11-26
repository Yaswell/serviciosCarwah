const express = require('express');
const router = express.Router();
const asesoresHandlers = require('../router-handlers/asesores-handlers');


router.get('/asesores', async (req, res) => {
    try {
        const asesores = await asesoresHandlers.find();
        if (asesores.length !== 0) {
            return res.send(asesores);
        }else { 
            res.status(404).send({ error: "There are not asesores stored" });
        }
        
        
    } catch (error) {
        res.send(error);
    }
});

router.get('/asesores/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const asesor = await asesoresHandlers.findById(id);
        if (asesor) {
            return res.send(asesor);
        }else { 
            res.status(201).send({ error: "asesores not found!" });
        }
        
        
    } catch (error) {
        res.status(500).send(error);
    }
});


router.post('/asesores', async (req, res) => {
    try {
        const { nombre } = req.body;
        const asesor = await asesoresHandlers.insert(nombre);
        if (asesor) {
            return res.status(201).send(asesor);
        }

    } catch (error) {
        if (error) {
           return res.status(400).send({ error: "Asesor not saved" });
        }
    }
});

router.put('/asesores/:1', async (req, res) => {
    try {
        const { id, nombre } = req.body;
        const asesor = await asesoresHandlers.update(id, nombre);
        if (asesor) {
            return res.status(201).send(asesor);
        }else {
            res.status(400).send({ error: "This record does not exist" });
        }
        

    } catch (error) {
        if (error) {
           return res.status(400).send({ error: "asesor not updated" });
        }
    }
});

router.delete('/asesores/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const asesor = await asesoresHandlers.delete(id);
        if (asesor) {
            res.status(201).send(asesor);
        }else {
            res.status(404).send({ error: "This record does not exist" });
        }
        

    } catch (error) {
        if (error) {
           return res.status(400).send({ error: "asesor not deleted" });
        }
    }
});
module.exports = router;