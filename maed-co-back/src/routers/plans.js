const express = require('express');
const router = express.Router();
const plansHandlers = require('../router-handlers/plans-handlers');

router.get('/plans', async(req, res) => {
    try {
        const plan = await plansHandlers.find();
        if(plan.length !== 0){
            return res.send(users);
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
        const {  tipo,planName, planPrice  } = req.body;
        const user = await plansHandlers.insert( tipo,planName, planPrice);
        if (user) {
            return res.status(201).send(user);
        }

    } catch (error) {
        if (error) {
            return res.status(400).send({ error: "Plan not saved" });
         }
    }
})

router.put('/plans', async (req, res) => {
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



module.exports = router;