const express = require('express');
const router = express.Router();
const lavadoresHandlers = require('../router-handlers/lavadores-handlers');

router.get('/lavadores', async (req, res) => {
    try {
        const lavadores = await lavadoresHandlers.find();
        if (lavadores.length !== 0) {
            return res.send(lavadores);
        }else { 
            res.status(404).send({ error: "There are not lavadores stored" });
        }
        
        
    } catch (error) {
        res.send(error);
    }
});

router.get('/lavadores/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const asesor = await lavadoresHandlers.findById(id);
        if (asesor) {
            return res.send(asesor);
        }else { 
            res.status(201).send({ error: "lavadores not found!" });
        }
        
        
    } catch (error) {
        res.status(500).send(error);
    }
});


router.post('/lavadores', async (req, res) => {
    try {
        const { nombre } = req.body;
        const asesor = await lavadoresHandlers.insert(nombre);
        if (asesor) {
            return res.status(201).send(asesor);
        }

    } catch (error) {
        if (error) {
           return res.status(400).send({ error: "Asesor not saved" });
        }
    }
});

router.put('/lavadores', async (req, res) => {
    try {
        const { id, nombre } = req.body;
        const asesor = await lavadoresHandlers.update(id, nombre);
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

router.delete('/lavadores/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const asesor = await lavadoresHandlers.delete(id);
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