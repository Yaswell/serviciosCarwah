const pool = require('../pool');
const toCamelCase = require('../utils/to-camel-case');

class outsideServicesHandlers{
    static async find() {
        const { rows } = await pool.query('SELECT * FROM outside_services;');
        return toCamelCase(rows);
    }
    static async findById(id) {
        const { rows } = await pool.query('SELECT * FROM outside_services WHERE id = $1;', [id]);
        return toCamelCase(rows)[0];
    }
    
    static async insert(descon_pintura, recons_pintura, hid_plasticos, encerado_mano, encerado_maquina, pulido_focos) {
        const { rows } = await pool.query(`INSERT INTO outside_services (descon_pintura, recons_pintura, hid_plasticos, encerado_mano, encerado_maquina, pulido_focos)
         VALUES($1, $2, $3, $4, $5, $6) RETURNING *;`, [descon_pintura, recons_pintura, hid_plasticos, encerado_mano, encerado_maquina, pulido_focos]);
        
        return toCamelCase(rows)[0];
    }

    static async update(id, descon_pintura, recons_pintura, hid_plasticos, encerado_mano, encerado_maquina, pulido_focos) {
        const { rows } = await pool.query(`UPDATE outside_services 
        SET descon_pintura = $2, recons_pintura = $3, hid_plasticos = $4, encerado_mano = $5, encerado_maquina = $6, pulido_focos = $7
        WHERE id = $1 RETURNING *;`, [id, descon_pintura, recons_pintura, hid_plasticos, encerado_mano, encerado_maquina, pulido_focos]);

        return toCamelCase(rows)[0];
    }

}
module.exports = outsideServicesHandlers;