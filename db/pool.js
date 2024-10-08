const { Pool } = require("pg");

module.exports = new Pool({
  host: "localhost",
  user: "cryptexred",
  database: "messaging_app",
  password: "123",
  port: 5432,
});
