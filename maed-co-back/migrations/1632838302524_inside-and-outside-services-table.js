/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = pgm => {
    pgm.sql(`
        CREATE TABLE outside_services (
            id SERIAL PRIMARY KEY,
            descon_pintura INTEGER,
            recons_pintura INTEGER,
            hid_plasticos INTEGER,
            encerado_mano INTEGER,
            encerado_maquina INTEGER,
            pulido_focos INTEGER
        );
    `);
};

exports.down = pgm => {
    pgm.sql(`
        DROP TABLE outside_services;
    `);
};
//npm run migrate inside and outside services table