const dotenv = require("dotenv");
dotenv.config();

module.exports = config = {
  client: "pg",
  connection: process.env.PG_CONNECTION_STRING,
  migrations: {
    directory: "src/api/database",
  },
  useNullAsDefault: true,
};
