/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = pgm => {
    pgm.sql(`
        CREATE TABLE inside_services (
        id SERIAL PRIMARY KEY,
        hid_tablero_paneles INTEGER,
        ozono INTEGER,
        hid_leather_vynil INTEGER,
        limpieza_interior INTEGER,
        lavado_motor INTEGER
        );
    `);
};

exports.down = pgm => {
    pgm.sql(`
        DROP TABLE inside_services
    `)
};
