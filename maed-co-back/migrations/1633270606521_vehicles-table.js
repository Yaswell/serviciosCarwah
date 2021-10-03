/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = pgm => {
    pgm.sql(`
        CREATE TABLE vehicles (
            id SERIAL PRIMARY KEY,
            brand VARCHAR(20) NOT NULL,
            model VARCHAR(20) NOT NULL,
            plate VARCHAR(20) NOT NULL,
            color VARCHAR(20) NOT NULL,
            vehicle_type VARCHAR(20),
            client_id INTEGER NOT NULL REFERENCES clients(id) ON DELETE CASCADE
        );
    `);
};

exports.down = pgm => {
    pgm.sql(`
        DROP TABLE vehicles;
    `);
};
