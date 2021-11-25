const express = require('express');
const router = express.Router();
const bcript = require('bcryptjs');
const userHandlers = require('../router-handlers/users-handlers');

router.get('/users', async (req, res) => {
    try {
        const users = await userHandlers.find();
        if (users.length !== 0) {
            res.setHeader('Content-Type', 'application/json');
            return res.send(users);
        } else {
            res.status(404).send({ error: "There are not users stored" });
        }
        
        
    } catch (error) {
        res.send(error);
    }
});

router.get('/users/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const user = await userHandlers.findById(id);
        if (user) {
            return res.send(user);
        }else {
            res.status(404).send({ error: "User not found!" });
        }
        
        
    } catch (error) {
        res.status(500).send(error);
    }
});

router.get('/users/username/:username', async (req, res) => {
    try {
        const { username } = req.params;
        const user = await userHandlers.findByUsername(username);
        if (user) {
            return res.send(user);
        }else {
            res.status(404).send({ error: "User not found!" });
        }
       
        
    } catch (error) {
        res.status(500).send(error);
    }
});

router.get('/users/email/:email', async (req, res) => {
    try {
        const { email } = req.params;
        const user = await userHandlers.findByEmail(email);
        if (user) {
            return res.send(user);
        }else {
            res.status(404).send({ error: "User not found!" });
        }
        
        
    } catch (error) {
        res.status(500).send(error);
    }
});

router.post('/users', async (req, res) => {
    try {
        const { firstName, lastName, username, email, password, isAdmin, role } = req.body;
        const user = await userHandlers.insert(firstName, lastName, username, email, await bcript.hash(password, 8), isAdmin, role);
        const userToken = await userHandlers.generateToken(user);
        if (userToken) {
            return res.status(201).send(userToken);
        }

    } catch (error) {
        if (error) {
           return res.status(400).send({ error, detail: 'User not saved' });
        }
    }
});

router.post('/users/login', async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await userHandlers.login(username, password);
        res.send(user);
    } catch (error) {
        if (error) {
            console.log(error)
            res.status(400).send(error);
        }
    }
});

router.post('/users/logout', async (req, res) => {
    try {
        await userHandlers.logout(req.user, req.token);
        res.send('Logged Out');
    } catch (error) {
        if (error) {
            console.log(error)
            res.status(400).send(error);
        }
    }
});

router.put('/users', async (req, res) => {
    try {
        const {id, firstName, lastName, username, email, password, isAdmin, role } = req.body;
        const user = await userHandlers.update(id, firstName, lastName, username, email, password, isAdmin, role);
        if (user) {
            return res.status(201).send(user);
        }else{
            res.status(400).send({ error: "This record does not exist" });
        }
        

    } catch (error) {
        if (error) {
           return res.status(400).send({ error: "User not updated" });
        }
    }
});

router.delete('/users/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const user = await userHandlers.delete(id);
        if (user) {
            res.status(201).send(user);
        }else{
            res.status(404).send({ error: "This record does not exist" });
        }
        

    } catch (error) {
        if (error) {
           return res.status(400).send({ error: "Client not updated" });
        }
    }
});

module.exports = router;