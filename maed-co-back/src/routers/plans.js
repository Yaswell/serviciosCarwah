const express = require('express');
const router = express.Router();
const plansHandlers = require('../router-handlers/plans-handlers');

router.get('/plans', async(req, res) => {
    try {
        const plan = await plansHandlers.find();
        if(plan.length !== 0){
            return res.send(plan);
        }
        res.status(404).send({error: "There are no plans yet."})
    } catch (error) {
        res.send(error);
    }


})

router.get('/plans/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const plan = await plansHandlers.findById(id);
        if (plan) {
            return res.send(plan);
        }else { 
            res.status(404).send({ error: "Plan not found!" });
        }
        
        
    } catch (error) {
        res.status(500).send(error);
    }
});

router.post('/plans', async(req, res) => {
    try {
        const { tipo, planName, planPrice } = req.body;
        const plan = await plansHandlers.insert(tipo, planName, planPrice);
        if (plan) {
            return res.status(201).send(plan);
        }

    } catch (error) {
        if (error) {
            return res.status(400).send({ err: "Plan not saved", error });
         }
    }
})

router.put('/plans/:id', async (req, res) => {
    try {
        const { id,  tipo,planName, planPrice } = req.body;
        const user = await plansHandlers.update(id,  tipo,planName, planPrice);
        if (user) {
            return res.status(201).send(user);
        }else {
            res.status(400).send({ error: "This record does not exist" });
        }
        

    } catch (error) {
        if (error) {
           return res.status(400).send({ error: "Plan not updated" });
        }
    }
});

router.delete('/lavadores/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const plan = await plansHandlers.delete(id);
        if (plan) {
            res.status(201).send(plan);
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