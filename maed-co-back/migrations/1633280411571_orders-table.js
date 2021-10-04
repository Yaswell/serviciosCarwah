/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = pgm => {
    pgm.sql(`
        CREATE TABLE orders (
            id SERIAL PRIMARY KEY,
            date_and_time TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
            order_details JSON NOT NULL,
            client_id INTEGER NOT NULL REFERENCES clients(id) ON DELETE CASCADE
        );
    `);
};

exports.down = pgm => {
    pgm.sql(`
        DROP TABLE orders;
    `)
};
