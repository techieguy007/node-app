var mysql = require('mysql2');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "sakila"
});

con.connect(function(err) {
  if (err) throw err;
  else {
    console.log("Connected!");
    con.query("SELECT * FROM actor ORDER BY first_name LIMIT 10", function (err, result, fields) {
      if (err) throw err;
      else {
        console.log(result);
        con.end((error) => {
            if (error) {
              console.error('Error closing MySQL connection:', error);
              return;
            }
            console.log('MySQL connection closed.');
          });
      }
    });
  }
});