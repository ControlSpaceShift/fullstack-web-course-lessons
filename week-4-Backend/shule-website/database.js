const mysql = require('mysql');
// create the database connection
const pool = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "",
    database: "shule"
})

// Test database connection
// pool.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
// });

pool.query("SELECT name FROM students", (err, result) => {
    if (err) {
        console.log(err);
    } else {
        console.log(result);
    }
});