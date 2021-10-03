/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = pgm => {
    pgm.sql(`
        CREATE TABLE users (
            id SERIAL PRIMARY KEY,
            email VARCHAR(20),
            username VARCHAR(20),
            password VARCHAR(50) NOT NULL,
            first_name VARCHAR(15),
            last_name VARCHAR(15),
            is_admin BOOLEAN,
            role VARCHAR(30),
            tokens JSON NOT NULL, 
            CHECK(COALESCE(username, email) IS NOT NULL)
        );
    `);
};

exports.down = pgm => {
    pgm.down(`
        DROP TABLE users;
    `);
};
