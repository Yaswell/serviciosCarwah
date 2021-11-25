const pool = require('../pool');
const toCamelCase = require('../utils/to-camel-case');

class plansHandlers {
    static async find() {
        const { rows } = await pool.query('SELECT * FROM plans;');
        return toCamelCase(rows);
    }
    static async findById(id) {
        const { rows } = await pool.query('SELECT * FROM plans WHERE id = $1;', [id]);
        return toCamelCase(rows)[0];
    }

    static async insert(tipo, planName, planPrice) {
        const { rows } = await pool.query(`INSERT INTO plans (tipo, plan_name, plan_price)
         VALUES($1, $2, $3') RETURNING *;`, [tipo, planName, planPrice]);
      
        
        return toCamelCase(rows)[0];
    }
        //Variable New will be changed becauase the world new is reserved
    static async update(id, tipo, planName, planPrice) {
        const { rows } = await pool.query(`UPDATE plans 
        SET tipo = $2, plan_name = $3, plan_price= $4, WHERE id = $1 RETURNING *;`, [id, tipo, planName, planPrice]);

        return toCamelCase(rows)[0];
    }


}
module.exports = plansHandlers;