/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = pgm => {
    pgm.sql(`
        CREATE TABLE maed_services (
            id SERIAL PRIMARY KEY,
            washer VARCHAR(20) NOT NULL,
            adviser VARCHAR(20),
            left_objects VARCHAR(100),
            date_and_time TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
            crashes VARCHAR(100),
            client_id INTEGER NOT NULL REFERENCES clients(id) ON DELETE CASCADE
        );
    `);
};

exports.down = pgm => {
    pgm.sql(`
        DROP TABLE mead_services;
    `);
};
