/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = pgm => {
    pgm.sql(`
    ALTER TABLE plans 
        DROP COLUMN economico,
        DROP COLUMN premium, 
        DROP COLUMN super_premium ,
        DROP COLUMN ceramic_counting ,
        DROP COLUMN New, 
        DROP COLUMN vip, 
        DROP COLUMN diamond ,
        DROP COLUMN descripcion ,
        ADD plan_name VARCHAR(30),
        ADD plan_price INTEGER
       
`);
};

exports.down = pgm => {
    
    pgm.sql (`
         DROP TABLE plans
`)
    
};
