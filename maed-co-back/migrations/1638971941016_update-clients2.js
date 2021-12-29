/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = pgm => {
    pgm.sql(`
    ALTER TABLE clients ADD CONSTRAINT  unique_phone UNIQUE (phone)
    `);
};

exports.down = pgm => {
    pgm.sql(`
        DROP TABLE clients;
    `);
};
