const pool = require('../pool');
const toCamelCase = require('../utils/to-camel-case');

class usersHandlers {
    static async find() {
        const { rows } = await pool.query('SELECT * FROM users;');
        return toCamelCase(rows);
    }

    static async findById(id) {
        const { rows } = await pool.query('SELECT * FROM users WHERE id = $1;', [id]);
        return toCamelCase(rows)[0];
    }

    static async findByPhone(number) {
        const { rows } = await pool.query('SELECT * FROM users WHERE phone = $1;', [number]);
        return toCamelCase(rows);
    }

    static async findByEmail(email) {
        const { rows } = await pool.query('SELECT * FROM users WHERE email = $1;', [email]);
        return toCamelCase(rows);
    }

    static async insert(email, user_name, password, name, last_name, is_admin, rol) {
        const { rows } = await pool.query(`INSERT INTO users (email, user_name, password, name, last_name, is_admin, rol)
         VALUES($1, $2, $3, $4) RETURNING *;`, [email, user_name, password, name, last_name, is_admin, rol]);
        
        return toCamelCase(rows)[0];
    }

    static async update(id, email, user_name, password, name, last_name, is_admin, rol) {
        const { rows } = await pool.query(`UPDATE users 
        SET email = $2, user_name = $3, password = $4, name = $5, last_name = $6, is_admin = $7, rol = $8 
        WHERE id = $1 RETURNING *;`, [id, email, user_name, password, name, last_name, is_admin, rol]);

        return toCamelCase(rows)[0];
    }

    static async delete(id) {
        const { rows } = await pool.query('DELETE FROM users WHERE id = $1 RETURNING *;', [id]);
        return toCamelCase(rows)[0];
    }
}
module.exports = usersHandlers;