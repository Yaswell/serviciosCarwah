const app = require('./src/app');
const pool = require('./src/pool');

pool
    .connect({
    host: 'localhost',
    port: 5432,
    database: 'maed',
    user: 'postgres',
    password: '1125Lenny'
    })

    .then(() => {
        app.listen(3001, () => console.log('App listening on port 3001'));
    })

    .catch(err => console.error(err));