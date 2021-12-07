/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = pgm => {
    pgm.sql(`
    ALTER TABLE outside_services
        ADD tipo_vehiculo VARCHAR(35)
      
       
`);
};

exports.down = pgm => {
    pgm.sql (`
    DROP TABLE outside_services
`);
};
