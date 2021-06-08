const pool = require("../../../database/db-connection");

function getUserInfo() {
  var query = "SELECT * FROM user";
  return pool.query(query);
}

module.exports = { getUserInfo };
