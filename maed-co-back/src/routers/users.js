const express = require('express');
const router = express.Router();
const usersHandlers = require('../router-handlers/user-handlers');

router.get('/users', async (req, res) => {
    try {
        const users = await usersHandlers.find();
        if (users.length !== 0) {
            return res.send(users);
        }
        res.status(404).send({ error: "There are not users stored" });
        
    } catch (error) {
        res.send(error);
    }
});

router.get('/users/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const user = await usersHandlers.findById(id);
        if (user) {
            return res.send(user);
        }
        res.status(404).send({ error: "Users not found!" });
        
    } catch (error) {
        res.send(error).status(500);
    }
});

router.get('/users/name/:name', async (req, res) => {
    try {
        const { phone } = req.params;
        const users = await usersHandlers.findByPhone(phone);
        if (users.length !== 0) {
            return res.send(users);
        }
        res.status(404).send({ error: "Users not found!" });
        
    } catch (error) {
        res.send(error).status(500);
    }
});


router.post('/users', async (req, res) => {
    try {
        const { email, user_name, password, name, last_name, is_admin, rol } = req.body;
        const user = await usersHandlers.insert(email, user_name, password, name, last_name, is_admin, rol);
        if (user) {
            return res.status(201).send(user);
        }

    } catch (error) {
        if (error) {
           return res.status(400).send({ error: "User not saved" });
        }
    }
});

router.put('/users', async (req, res) => {
    try {
        const { id, email, user_name, password, name, last_name, is_admin, rol } = req.body;
        const user = await usersHandlers.update(id, email, user_name, password, name, last_name, is_admin, rol);
        if (user) {
            return res.status(201).send(user);
        }
        res.status(400).send({ error: "This record does not exist" });

    } catch (error) {
        if (error) {
           return res.status(400).send({ error: "User not updated" });
        }
    }
});

router.delete('/users/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const user = await usersHandlers.delete(id);
        if (user) {
            res.status(201).send(user);
        }
        res.status(400).send({ error: "This record does not exist" });

    } catch (error) {
        if (error) {
           return res.status(400).send({ error: "User not updated" });
        }
    }
});

module.exports = router;
