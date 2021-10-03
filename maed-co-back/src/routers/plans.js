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

router.post('/plans', async(req, res) => {
    try {
        const {  tipo, economico, premium, super_premium, ceramic_counting, New, vip, diamond, descripcion } = req.body;
        const user = await plansHandlers.insert( tipo, economico, premium, super_premium, ceramic_counting, New, vip, diamond, descripcion);
        if (user) {
            return res.status(201).send(user);
        }

    } catch (error) {
        if (error) {
            return res.status(400).send({ error: "Plans not saved" });
         }
    }
})

router.put('/plans', async (req, res) => {
    try {
        const { id,  tipo, economico, premium, super_premium, ceramic_counting, New, vip, diamond, descripcion } = req.body;
        const user = await plansHandlers.update(id,  tipo, economico, premium, super_premium, ceramic_counting, New, vip, diamond, descripcion);
        if (user) {
            return res.status(201).send(user);
        }
        res.status(400).send({ error: "This record does not exist" });

    } catch (error) {
        if (error) {
           return res.status(400).send({ error: "Plan not updated" });
        }
    }
});

module.exports = router;