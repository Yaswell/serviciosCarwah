const pool = require('../pool');
const toCamelCase = require('../utils/to-camel-case');

class vehicleHandlers {

    static async find() {
        const { rows } = await pool.query('SELECT * FROM vehicles;');
        return toCamelCase(rows);
    }

    static async findById(id) {
        const { rows } = await pool.query('SELECT * FROM vehicles WHERE id = $1;', [id]);
        return toCamelCase(rows)[0];
    }

    static async findByPlate(plate) {
        const { rows } = await pool.query('SELECT * FROM clients WHERE plate = $1;', [plate]);
        return toCamelCase(rows)[0];
    }

    static async findByClientId(clientId) {
        const { rows } = await pool.query('SELECT * FROM vehicles WHERE client_id = $1', [clientId]);
        return toCamelCase(rows);
    }

    static async insert(brand, model, plate, color, vehicleType, clientId) {
        const { rows } = await pool.query(`
        INSERT INTO vehicles (brand, model, plate, color, vehicle_type, cliente_id)
        VALUES ($1, $2, $3, $4, $5, $6) RETURNING *;`, [brand, model, plate, color, vehicleType, clientId]);

        return toCamelCase(rows)[0];
    }

    static async update(id, brand, model, plate, color, vehicleType) {
        const { rows } = await pool.query(`
        UPDATE vehicles SET brand = $2, model = $3, plate = $4, color = $5, vehicle_type = $6
        WHERE id = $1 RETURNING *;`, [id, brand, model, plate, color, vehicleType]);

        return toCamelCase(rows)[0];
    }

    static async delete(id) {
        const { rows } = await pool.query('DELETE FROM vehicles WHERE id = $1 RETURNING *;', [id]);
        return toCamelCase(rows)[0];
    }

}

module.exports = vehicleHandlers;