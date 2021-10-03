/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = pgm => {
    pgm.sql (`
    CREATE TABLE plans (
        id SERIAL PRIMARY KEY,
        tipo VARCHAR(30),
        economico INTEGER NOT NULL,
        premium INTEGER NOT NULL,
        super_premium INTEGER NOT NULL,
        ceramic_counting INTEGER NOT NULL,
        New INTEGER NOT NULL,
        vip INTEGER NOT NULL,
        diamond INTEGER NOT NULL,
        descripcion VARCHAR(500)
      );
    `)
};

exports.down = pgm => {
    pgm.sql (`
        DROP TABLE plans
    `)
};
