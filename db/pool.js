const { Pool } = require("pg");
const dotenv = require("dotenv");

dotenv.config();
const isProduction = process.env.NODE_ENV === "production";
const connectionString = isProduction
  ? process.env.DATABASE_URL
  : process.env.DATABASE_PUBLIC_URL;

module.exports = new Pool({
  connectionString,
  ssl: {
    rejectUnauthorized: false,
  },
});
