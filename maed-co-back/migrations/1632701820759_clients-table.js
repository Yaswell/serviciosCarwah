/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = pgm => {
    pgm.sql(`
        CREATE TABLE clients (
            id SERIAL PRIMARY KEY,
            first_name VARCHAR(20),
            last_name VARCHAR(20),
            phone VARCHAR(10),
            email VARCHAR(40),
            CHECK(COALESCE(phone, email) IS NOT NULL)
        );
    `);
};

exports.down = pgm => {
    pgm.sql(`
        DROP TABLE clients;
    `);
};

//DATABASE_URL=postgres://postgres:1125Lenny@localhost:5432/maed npm run migrate up
