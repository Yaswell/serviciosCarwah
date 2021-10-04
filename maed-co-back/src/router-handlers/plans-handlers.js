const pool = require('../pool');
const toCamelCase = require('../utils/to-camel-case');

class plansHandlers {
    static async find() {
        const { rows } = await pool.query('SELECT * FROM plans;');
        return toCamelCase(rows);
    }
    //There is no need to find Plans by Ids
    //We will only find update them

    //THIS INSERERT IS JUST FOR NOW
    static async insert(tipo, economico, premium, superPremium, ceramicCounting, New, vip, diamond, descripcion) {
        const { rows } = await pool.query(`INSERT INTO plans (tipo, economico, premium, super_premium, ceramic_counting, New, vip, diamond, descripcion)
         VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9,$10') RETURNING *;`, [tipo, economico, premium, superPremium, ceramicCounting, New, vip, diamond, descripcion]);
      
        
        return toCamelCase(rows)[0];
    }
        //Variable New will be changed becauase the world new is reserved
    static async update(id, tipo, economico, premium, superPremium, ceramicCounting, New, vip, diamond, descripcion) {
        const { rows } = await pool.query(`UPDATE plans 
        SET tipo = $2, economico = $3, premium= $4, super_premium = $5, ceramic_counting = $6, new = $7, vip = $8, diamond = $9, descripcion = $10
        WHERE id = $1 RETURNING *;`, [id, tipo, economico, premium, superPremium, ceramicCounting, New, vip, diamond, descripcion]);

        return toCamelCase(rows)[0];
    }


}
module.exports = plansHandlers;