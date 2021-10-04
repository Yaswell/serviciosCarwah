const pool = require('../pool');
const toCamelCase = require('../utils/to-camel-case');

class maedServicesHandlers {

    static async find() {
        const { rows } = await pool.query('SELECT * FROM maed_services;');
        return toCamelCase(rows);
    }

    static async findById(id) {
        const { rows } = await pool.query('SELECT * FROM maed_services WHERE id = $1;', [id]);
        return toCamelCase(rows)[0];
    }

    static async findByClientId(clientId) {
        const { rows } = await pool.query('SELECT * FROM maed_services WHERE client_id = $1', [clientId]);
        return toCamelCase(rows);
    }

    static async insert(washer, adviser, leftObjects, crashes, clientId) {
        const { rows } = await pool.query(`
        INSERT INTO maed_services (washer, adviser, left_objects, crashes, client_id)
        VALUES ($1, $2, $3, $4, $5) RETURNING *;`, [washer, adviser, leftObjects, crashes, clientId]);

        return toCamelCase(rows)[0];
    }

    static async update(id, washer, adviser, leftObjects, crashes) {
        const { rows } = await pool.query(`
        UPDATE maed_services SET washer = $2, adviser = $3, left_objects = $4, crashes = $5
        WHERE id = $1 RETURNING *;`, [id, washer, adviser, leftObjects, crashes]);

        return toCamelCase(rows)[0];
    }

    static async delete(id) {
        const { rows } = await pool.query('DELETE FROM maed_services WHERE id = $1 RETURNING *;', [id]);
        return toCamelCase(rows)[0];
    }

}

module.exports = maedServicesHandlers;