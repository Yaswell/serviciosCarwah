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

        CREATE TABLE inside_services (
            id SERIAL PRIMARY KEY,
            hid_tablero_paneles INTEGER,
            ozono INTEGER,
            hid_leather_vynil INTEGER,
            limpieza_interior INTEGER,
            lavado_motor INTEGER,
        );
    `);
};

exports.down = pgm => {
    pgm.sql(`
        DROP TABLE outside_services;
        DROP TABLE inside_services;
    `);
};
