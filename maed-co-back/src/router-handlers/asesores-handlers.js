const pool = require('../pool');
const toCamelCase = require('../utils/to-camel-case');

class asesoresHandlers{
    static async find() {
        const { rows } = await pool.query('SELECT * FROM asesores;');
        return toCamelCase(rows);
    }

    static async findById(id) {
        const { rows } = await pool.query('SELECT * FROM asesores WHERE id = $1;', [id]);
        return toCamelCase(rows)[0];
    }
    static async insert(nombre) {
        const { rows } = await pool.query(`INSERT INTO asesores (nombre)
         VALUES($1) RETURNING *;`, [nombre]);
        
        return toCamelCase(rows)[0];
    }
    static async update(id, nombre) {
        const { rows } = await pool.query(`UPDATE asesores 
        SET nombre = $2
        WHERE id = $1 RETURNING *;`, [id, nombre]);

        return toCamelCase(rows)[0];
    }

    static async delete(id) {
        const { rows } = await pool.query('DELETE FROM asesores WHERE id = $1 RETURNING *;', [id]);
        return toCamelCase(rows)[0];
    }
}

module.exports = asesoresHandlers;