/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = pgm => {
    pgm.sql(`
    CREATE TABLE users (
        id SERIAL PRIMARY KEY,
        email VARCHAR(20),
        user_name VARCHAR(20),
        password VARCHAR(50),
        name VARCHAR(10),
        last_name VARCHAR(10),
        is_admin BOOLEAN,
        rol VARCHAR(30)
        );
    `);
};

exports.down = pgm => {
    pgm.sql(`
        DROP TABLE clients;
    `)
};
