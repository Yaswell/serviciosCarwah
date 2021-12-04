/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = pgm => {
    pgm.sql (`
    CREATE TABLE plans (
        id SERIAL PRIMARY KEY,
        tipo VARCHAR(30),
        plan_name VARCHAR(30),
        plan_price INTEGER);
    `);
};

exports.down = pgm => {
    pgm.sql (`
        DROP TABLE plans
    `);
};
