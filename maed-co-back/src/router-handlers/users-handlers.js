const pool = require('../pool');
const toCamelCase = require('../utils/to-camel-case');
const jwt = require('jsonwebtoken');
const bcript = require('bcryptjs');

class userHandlers {
    
    static async find() {
        const { rows } = await pool.query('SELECT * FROM users;');
        return toCamelCase(rows);
    }

    static async findById(id) {
        const { rows } = await pool.query('SELECT * FROM users WHERE id = $1;', [id]);
        return toCamelCase(rows)[0];
    }

    static async findByUsername(user) {
        const { rows } = await pool.query('SELECT * FROM users WHERE phone = $1;', [user]);
        return toCamelCase(rows);
    }

    static async findByEmail(email) {
        const { rows } = await pool.query('SELECT * FROM users WHERE email = $1;', [email]);
        return toCamelCase(rows);
    }

    static async insert(firstName, lastName, username, email, password, isAdmin, role, tokens = JSON.stringify([])) {
        const { rows } = await pool.query(`
            INSERT INTO users (first_name, last_name, username, email, password, is_admin, role, tokens)
            VALUES($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *;`,
            [firstName, lastName, username, email, password, isAdmin, role, tokens]
        );
        
        return toCamelCase(rows)[0];
    }

    static async update(id, firstName, lastName, username, email, isAdmin, role) {
        const { rows } = await pool.query(`UPDATE users 
        SET first_name = $2, last_name = $3, phone = $4, email = $5, is_admin = $6, role = $7
        WHERE id = $1 RETURNING *;`, [id, firstName, lastName, username, email, isAdmin, role, password, tokens]);

        return toCamelCase(rows)[0];
    }

    static async delete(id) {
        const { rows } = await pool.query('DELETE FROM users WHERE id = $1 RETURNING *;', [id]);
        return toCamelCase(rows)[0];
    }

    static async generateToken(user) {
        const token = jwt.sign({ id: user.id.toString() }, 'klkwawawa');
        const userTokens = user.tokens;
        userTokens.push({ token });
        const { rows } = await pool.query('UPDATE users SET tokens = $2 WHERE id = $1 RETURNING *;',
            [user.id, JSON.stringify(userTokens)]);
        return toCamelCase(rows)[0];
    }

    static async login(username, password) {
        const { rows } = await pool.query('SELECT * FROM users WHERE username = $1;', [username]);
        const user = toCamelCase(rows)[0];
        if (!user) {
            throw new Error('Unable to login');
        }

        const isMatch = await bcript.compare(password, user.password);
        if (!isMatch) {
            throw new Error('Unable to login incorrect password');
        }
        return this.generateToken(user);
    }

    static async logout(user, token) {
        const newTokensArr = user.tokens.filter(tokens => tokens.token !== token);
        const { rows } = await pool.query('UPDATE users SET tokens = $2 WHERE id = $1 RETURNING *;',
            [user.id, JSON.stringify(newTokensArr)]);
        return toCamelCase(rows)[0];
    }

}

module.exports = userHandlers;