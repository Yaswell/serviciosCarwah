const pool = require('../pool');
const toCamelCase = require('../utils/to-camel-case');

class insideServiceHandlers{
    static async find() {
        const { rows } = await pool.query('SELECT * FROM inside_services;');
        return toCamelCase(rows);
    }
    static async findById(id) {
        const { rows } = await pool.query('SELECT * FROM inside_services WHERE id = $1;', [id]);
        return toCamelCase(rows)[0];
    }

    
    static async insert(hidTableroPaneles, ozono, hidLeatherVynil, limpiezaInterior,lavadoMotor, tipoVehiculo) {
        const { rows } = await pool.query(`INSERT INTO inside_services (hid_tablero_paneles, ozono, hid_leather_vynil, limpieza_interior,lavado_motor, tipo_vehiculo)
         VALUES($1, $2, $3, $4, $5, $6) RETURNING *;`, [hidTableroPaneles, ozono, hidLeatherVynil, limpiezaInterior,lavadoMotor, tipoVehiculo]);
        
        return toCamelCase(rows)[0];
    }

    static async update(id,hidTableroPaneles, ozono, hidLeatherVynil, limpiezaInterior,lavadoMotor, tipoVehiculo) {
        const { rows } = await pool.query(`UPDATE inside_services 
        SET hid_tablero_paneles = $2, ozono = $3, hid_leather_vynil = $4, limpieza_interior = $5, lavado_motor = $6, tipo_vehiculo = $7
        WHERE id = $1 RETURNING *;`, [id, hidTableroPaneles, ozono, hidLeatherVynil, limpiezaInterior,lavadoMotor, tipoVehiculo]);

        return toCamelCase(rows)[0];
    }

    static async delete(id) {
        const { rows } = await pool.query('DELETE FROM inside_services WHERE id = $1 RETURNING *;', [id]);
        return toCamelCase(rows)[0];
    }
    
}
module.exports = insideServiceHandlers;