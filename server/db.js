const { Pool } = require('pg');

const PG_URI = 'postgres://itaqqisz:nPar51lkniU_I4zrCvdPmMPlF_JT5j-M@castor.db.elephantsql.com/itaqqisz';

// This may require a password.  'postgres' is a superuser which doesn't require authentication, but if needed see this resource:
// https://chartio.com/resources/tutorials/how-to-set-the-default-user-password-in-postgresql/

// const pool = new Pool({
//   user: "postgres",
//   password: "root",
//   database: "todo_database",
//   host: "localhost",
//   port: 5432
// });

const pool = new Pool({
  connectionString: PG_URI
});

module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  }
};