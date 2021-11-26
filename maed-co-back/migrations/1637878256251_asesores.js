/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = pgm => {
    pgm.sql(`
    CREATE TABLE asesores(
        id SERIAL PRIMARY KEY,
        nombre VARCHAR(50)
    )    
`);
};

exports.down = pgm => {
    pgm.sql(`
    DROP TABLE asesores;
`);
};
