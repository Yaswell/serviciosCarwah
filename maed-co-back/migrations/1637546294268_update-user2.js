/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = pgm => {
    pgm.sql(`
    ALTER TABLE users 
        ALTER COLUMN email TYPE varchar(100);
`);
};

exports.down = pgm => {
    pgm.sql(`
        ALTER TABLE users 
            ALTER COLUMN email TYPE varchar(50);
    `);
};
