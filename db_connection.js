var mysql = require('mysql2');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "sakila"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

