const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "datn-petservice",
});


connection.connect();



module.exports = connection;
