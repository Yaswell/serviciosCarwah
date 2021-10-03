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

    //This is just while we test the DB since the user shouldn't insert more rows and just should be able to update the prices.
    static async insert(hid_tablero_paneles, ozono, hid_leather_vynil, limpieza_interior,lavado_motor) {
        const { rows } = await pool.query(`INSERT INTO inside_services (hid_tablero_paneles, ozono, hid_leather_vynil, limpieza_interior,lavado_motor)
         VALUES($1, $2, $3, $4, $5) RETURNING *;`, [hid_tablero_paneles, ozono, hid_leather_vynil, limpieza_interior,lavado_motor]);
        
        return toCamelCase(rows)[0];
    }

    static async update(id, hid_tablero_paneles, ozono, hid_leather_vynil, limpieza_interior,lavado_motor) {
        const { rows } = await pool.query(`UPDATE inside_services 
        SET hid_tablero_paneles = $2, ozono = $3, hid_leather_vynil = $4, limpieza_interior = $5, lavado_motor = $6
        WHERE id = $1 RETURNING *;`, [id, hid_tablero_paneles, ozono, hid_leather_vynil, limpieza_interior,lavado_motor]);

        return toCamelCase(rows)[0];
    }
}
module.exports = insideServiceHandlers;