const pool = require('../pool');
const toCamelCase = require('../utils/to-camel-case');

class clientsHandlers {

    static async find() {
        const { rows } = await pool.query('SELECT * FROM clients;');
        return toCamelCase(rows);
    }

    static async findById(id) {
        const { rows } = await pool.query('SELECT * FROM clients WHERE id = $1;', [id]);
        return toCamelCase(rows)[0];
    }

    static async findByPhone(number) {
        const { rows } = await pool.query('SELECT * FROM clients WHERE phone = $1;', [number]);
        return toCamelCase(rows);
    }

    static async findByEmail(email) {
        const { rows } = await pool.query('SELECT * FROM clients WHERE email = $1;', [email]);
        return toCamelCase(rows);
    }

    static async insert(firstName, lastName, phone, email) {
        const { rows } = await pool.query(`INSERT INTO clients (first_name, last_name, phone, email)
         VALUES($1, $2, $3, $4) RETURNING *;`, [firstName, lastName, phone, email]);
        
        return toCamelCase(rows)[0];
    }

    static async update(id, firstName, lastName, phone, email) {
        const { rows } = await pool.query(`UPDATE clients 
        SET first_name = $2, last_name = $3, phone = $4, email = $5
        WHERE id = $1 RETURNING *;`, [id, firstName, lastName, phone, email]);

        return toCamelCase(rows)[0];
    }

    static async delete(id) {
        const { rows } = await pool.query('DELETE FROM clients WHERE id = $1 RETURNING *;', [id]);
        return toCamelCase(rows)[0];
    }
}

module.exports = clientsHandlers;