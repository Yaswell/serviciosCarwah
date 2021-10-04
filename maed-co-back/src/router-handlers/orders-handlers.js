const pool = require('../pool');
const toCamelCase = require('../utils/to-camel-case');

class ordersHandlers {

    static async find() {
        const { rows } = await pool.query('SELECT * FROM orders;');
        return toCamelCase(rows);
    }

    static async findById(id) {
        const { rows } = await pool.query('SELECT * FROM orders WHERE id = $1;', [id]);
        return toCamelCase(rows);
    }

    static async findByClientId(clientId) {
        const { rows } = await pool.query('SELECT * FROM orders WHERE client_id = $1', [clientId]);
        return toCamelCase(rows);
    }

    static async insert(orderDetails, clientId) {
        const { rows } = await pool.query(`
        INSERT INTO orders (order_details, client_id) VALUES ($1, $2) RETURNING *;`, [JSON.stringify(orderDetails), clientId]);
        return toCamelCase(rows)[0];
    }

    static async update(id, orderDetails) {
        const { rows } = await pool.query(`
            UPDATE orders SET order_details = $2 WHERE id = $1 RETURNING *;
        `, [id, JSON.stringify(orderDetails)]);

        return toCamelCase(rows)[0];
    }

    static async delete(id) {
        const { rows } = await pool.query('DELETE FROM orders WHERE id = $1 RETURNING *;', [id]);
        return toCamelCase(rows)[0];
    }

}

module.exports = ordersHandlers;