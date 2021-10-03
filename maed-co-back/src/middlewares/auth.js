const jwt = require('jsonwebtoken');
const userHandlers = require('../router-handlers/users-handlers');

const auth = async (req, res, next) =>  {
    try {
        const token = req.header('Authorization').replace('Bearer ', '');
        const decoded = jwt.verify(token, 'klkwawawa');
        const user = await userHandlers.findById(decoded.id);
        const userToken = user.tokens.find(tokens => tokens.token === token);

        if (!userToken) {
            throw new Error();
        }

        req.user = user;
        req.token = token;
        next();
    } catch (err) {
        res.status(401).send({ err: 'Please Authenticate' });
    }
}

module.exports = auth;